import antlr4 from 'antlr4';
import { CharStreams, CommonTokenStream } from 'antlr4';

import RegexLexer from './generated/RegexLexer.js';
import RegexParser from './generated/RegexParser.js';
import CustomVisitor from './CustomRegexVisitor.js';

import fs from 'fs';

async function main() {
  let input = '';
  try {
    input = fs.readFileSync('input.txt', 'utf8');
  } catch (err) {
    console.error("⚠️ No se pudo leer el archivo input.txt.");
    return;
  }

  // Crear flujo de caracteres
  const chars = CharStreams.fromString(input);

  // === ANÁLISIS LÉXICO ===
  const lexer = new RegexLexer(chars);
  const tokenStream = new CommonTokenStream(lexer);

  // Obtener y mostrar todos los tokens reconocidos (Tabla de lexemas-tokens)
  tokenStream.fill();
  console.log("📌 Tabla de lexemas-tokens:");
  tokenStream.tokens.forEach(token => {
    const tokenName = lexer.symbolicNames[token.type];
    if (tokenName !== "WS") {
      console.log(`→ Token: '${token.text}'\tTipo: ${tokenName}`);
    }
  });

  // === ANÁLISIS SINTÁCTICO ===
  const parser = new Regex(tokenStream);
  parser.buildParseTrees = true;

  // Capturar errores
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      console.error(`❌ Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
    }
  });

  const tree = parser.Regex();

  // Validación sintáctica
  if (parser._syntaxErrors > 0) {
    console.error("\n❌ El código tiene errores de sintaxis. No se puede continuar.");
    return;
  }

  console.log("\n✅ Análisis léxico y sintáctico correcto.");

  // === ÁRBOL DE ANÁLISIS SINTÁCTICO ===
  const parseTreeStr = tree.toStringTree(parser.ruleNames);
  console.log("\n🌳 Árbol de análisis sintáctico:");
  console.log(parseTreeStr);

  // === INTERPRETACIÓN ===
  const visitor = new CustomRegexVisitor();
  console.log("\n🔧 Resultado del intérprete:");
  visitor.visit(tree);
}

main();