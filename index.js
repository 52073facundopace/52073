import antlr4 from 'antlr4';
import { CharStreams, CommonTokenStream } from 'antlr4';

import RegexLexer from './generated/RegexLexer.js';
import RegexParser from './generated/RegexParser.js';
import CustomVisitor from './CustomRegexVisitor.js';

import fs from 'fs';
import readline from 'readline';

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
  const symbolicNames = RegexLexer.symbolicNames || [];
  const literalNames = RegexLexer.literalNames || [];

  tokenStream.tokens.forEach(token => {
    const tokenName =
      symbolicNames[token.type] ||
      literalNames[token.type] ||
      token.type;
    if (tokenName !== "WS" && token.text !== null) {
      console.log(`→ Token: '${token.text}'\tTipo: ${tokenName}`);
    }
  });

  // === ANÁLISIS SINTÁCTICO ===
  const parser = new RegexParser(tokenStream);
  parser.buildParseTrees = true;

  // Capturar errores
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      console.error(`❌ Error de sintaxis en línea ${line}, columna ${column}: ${msg}`);
    }
  });

  const tree = parser.regex();

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
  const visitor = new CustomVisitor();
  console.log("\n🔧 Resultado del intérprete:");
  visitor.visit(tree);

  // === TRADUCCIÓN A JAVASCRIPT Y EJECUCIÓN ===
  const regexJS = visitor.toJSRegex(tree);
  console.log(`\n📝 Expresión regular traducida a JavaScript: /${regexJS}/`);

  // Prueba la expresión regular con un string de ejemplo usando readline
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('🔍 Ingresa un string para probar el match: ', (testString) => {
    const regexObj = new RegExp(regexJS);
    if (regexObj.test(testString)) {
      console.log('✅ ¡Hay match!');
    } else {
      console.log('❌ No hay match.');
    }
    rl.close();
  });
}

main();
