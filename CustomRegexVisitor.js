import RegexVisitor from './generated/RegexVisitor.js';

class CustomVisitor extends RegexVisitor {
  // Recorrido para validación (puedes expandir según tus necesidades)
  visitRegex(ctx) {
    if (ctx.term && ctx.term() && ctx.regex && ctx.regex()) {
      this.visit(ctx.term());
      this.visit(ctx.regex());
    } else if (ctx.term && ctx.term()) {
      this.visit(ctx.term());
    }
    return true;
  }

  visitTerm(ctx) {
    return ctx.factor().every(f => this.visit(f));
  }

  visitFactor(ctx) {
    this.visit(ctx.base());
    if (ctx.quantifier && ctx.quantifier()) this.visit(ctx.quantifier());
    return true;
  }

  visitCharBase(ctx) { return true; }
  visitGroupBase(ctx) { return this.visit(ctx.group()); }
  visitClassBase(ctx) { return this.visit(ctx.characterClass()); }

  visitGroup(ctx) { return this.visit(ctx.regex()); }
  visitCharacterClass(ctx) { return ctx.range().every(r => this.visit(r)); }
  visitRange(ctx) { return true; }
  visitQuantifier(ctx) { return true; }

  // === Traducción a expresión regular de JavaScript ===
  toJSRegex(ctx) {
    if (ctx.regex) return this.visitRegexToJS(ctx);
    return '';
  }

  visitRegexToJS(ctx) {
    let str = this.visitTermToJS(ctx.term());
    if (ctx.regex && ctx.regex()) {
      str += '|' + this.visitRegexToJS(ctx.regex());
    }
    return str;
  }

  visitTermToJS(ctx) {
    return ctx.factor().map(f => this.visitFactorToJS(f)).join('');
  }

  visitFactorToJS(ctx) {
    let base = this.visitBaseToJS(ctx.base());
    if (ctx.quantifier && ctx.quantifier()) base += ctx.quantifier().getText();
    return base;
  }

  visitBaseToJS(ctx) {
    if (ctx.CHAR && ctx.CHAR()) return ctx.CHAR().getText();
    if (ctx.group && ctx.group()) return '(' + this.visitGroupToJS(ctx.group()) + ')';
    if (ctx.characterClass && ctx.characterClass()) return this.visitCharacterClassToJS(ctx.characterClass());
    return '';
  }

  visitGroupToJS(ctx) {
    return this.visitRegexToJS(ctx.regex());
  }

  visitCharacterClassToJS(ctx) {
    let str = '[';
    // Si hay negación (^)
    if (ctx.getChild(1) && ctx.getChild(1).getText() === '^') str += '^';
    // Rellenar los rangos
    str += ctx.range().map(r => this.visitRangeToJS(r)).join('');
    str += ']';
    return str;
  }

  visitRangeToJS(ctx) {
    return ctx.getText();
  }
}

export default CustomVisitor;