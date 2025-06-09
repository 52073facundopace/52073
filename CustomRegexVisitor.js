import RegexVisitor from './RegexVisitor.js';

class CustomVisitor extends RegexVisitor {
  visitRegex(ctx) {
    // Si hay alternancia, visitamos ambos lados
    if (ctx.term() && ctx.regex()) {
      this.visit(ctx.term());
      this.visit(ctx.regex());
    } else {
      this.visit(ctx.term(0));
    }
    return true;
  }

  visitTerm(ctx) {
    // Concatenación: todos los factors
    return ctx.factor().every(f => this.visit(f));
  }

  visitFactor(ctx) {
    this.visit(ctx.base());
    // El quantifier es opcional
    if (ctx.quantifier) this.visit(ctx.quantifier());
    return true;
  }

  visitCharBase(ctx) { return true; }
  visitGroupBase(ctx) { return this.visit(ctx.group()); }
  visitClassBase(ctx) { return this.visit(ctx.characterClass()); }

  visitGroup(ctx) { return this.visit(ctx.regex()); }
  visitCharacterClass(ctx) { return ctx.range().every(r => this.visit(r)); }
  visitRange(ctx) { return true; }
  visitQuantifier(ctx) { return true; }
}

export default CustomVisitor;
