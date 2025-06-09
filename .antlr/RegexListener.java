// Generated from c:/Users/Ulises/regex-analyzer/Regex.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link RegexParser}.
 */
public interface RegexListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link RegexParser#regex}.
	 * @param ctx the parse tree
	 */
	void enterRegex(RegexParser.RegexContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#regex}.
	 * @param ctx the parse tree
	 */
	void exitRegex(RegexParser.RegexContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegexParser#term}.
	 * @param ctx the parse tree
	 */
	void enterTerm(RegexParser.TermContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#term}.
	 * @param ctx the parse tree
	 */
	void exitTerm(RegexParser.TermContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegexParser#factor}.
	 * @param ctx the parse tree
	 */
	void enterFactor(RegexParser.FactorContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#factor}.
	 * @param ctx the parse tree
	 */
	void exitFactor(RegexParser.FactorContext ctx);
	/**
	 * Enter a parse tree produced by the {@code CharBase}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void enterCharBase(RegexParser.CharBaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code CharBase}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void exitCharBase(RegexParser.CharBaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code GroupBase}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void enterGroupBase(RegexParser.GroupBaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code GroupBase}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void exitGroupBase(RegexParser.GroupBaseContext ctx);
	/**
	 * Enter a parse tree produced by the {@code ClassBase}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void enterClassBase(RegexParser.ClassBaseContext ctx);
	/**
	 * Exit a parse tree produced by the {@code ClassBase}
	 * labeled alternative in {@link RegexParser#base}.
	 * @param ctx the parse tree
	 */
	void exitClassBase(RegexParser.ClassBaseContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegexParser#group}.
	 * @param ctx the parse tree
	 */
	void enterGroup(RegexParser.GroupContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#group}.
	 * @param ctx the parse tree
	 */
	void exitGroup(RegexParser.GroupContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegexParser#characterClass}.
	 * @param ctx the parse tree
	 */
	void enterCharacterClass(RegexParser.CharacterClassContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#characterClass}.
	 * @param ctx the parse tree
	 */
	void exitCharacterClass(RegexParser.CharacterClassContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegexParser#range}.
	 * @param ctx the parse tree
	 */
	void enterRange(RegexParser.RangeContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#range}.
	 * @param ctx the parse tree
	 */
	void exitRange(RegexParser.RangeContext ctx);
	/**
	 * Enter a parse tree produced by {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void enterQuantifier(RegexParser.QuantifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link RegexParser#quantifier}.
	 * @param ctx the parse tree
	 */
	void exitQuantifier(RegexParser.QuantifierContext ctx);
}