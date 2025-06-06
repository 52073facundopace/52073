import ECMAScriptSubsetVisitor from './generated/RegexVisitor.js';

class CustomVisitor extends RegexVisitor {
  constructor() {
    super();
    this.variables = new Map();
  }

  visitProgram(ctx) {
    return ctx.statement().map(s => this.visit(s));
  }

  visitAssignmentStatement(ctx) {
    const id = ctx.Identifier().getText();
    const value = this.visit(ctx.expression());
    this.variables.set(id, value);
    return null;
  }

  visitConsoleStatement(ctx) {
    const value = this.visit(ctx.expression());
    console.log(`console.log -> ${value}`);
    return null;
  }

  visitWhileStatement(ctx) {
    while (this.visit(ctx.expression())) {
      this.visit(ctx.block());
    }
  }

  visitBlock(ctx) {
    return ctx.statement().map(s => this.visit(s));
  }

  visitAddSubExpr(ctx) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    return ctx.op.text === '+' ? left + right : left - right;
  }

  visitMulDivExpr(ctx) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    return ctx.op.text === '*' ? left * right : left / right;
  }

  visitParensExpr(ctx) {
    return this.visit(ctx.expression());
  }

  visitIdExpr(ctx) {
    const name = ctx.Identifier().getText();
    return this.variables.get(name) ?? 0;
  }

  visitNumExpr(ctx) {
    return parseInt(ctx.Number().getText(), 10);
  }
}

export default CustomVisitor;