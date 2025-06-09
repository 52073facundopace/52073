// Generated from c:/Users/Ulises/regex-analyzer/Regex.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import RegexListener from './RegexListener.js';
import RegexVisitor from './RegexVisitor.js';

const serializedATN = [4,1,16,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,3,0,20,8,0,1,1,4,1,23,8,1,11,1,12,1,
24,1,2,1,2,3,2,29,8,2,1,3,1,3,1,3,3,3,34,8,3,1,4,1,4,1,4,1,4,1,5,1,5,3,5,
42,8,5,1,5,4,5,45,8,5,11,5,12,5,46,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,3,7,62,8,7,3,7,64,8,7,1,7,3,7,67,8,7,1,7,0,0,8,0,2,4,6,8,10,
12,14,0,0,72,0,16,1,0,0,0,2,22,1,0,0,0,4,26,1,0,0,0,6,33,1,0,0,0,8,35,1,
0,0,0,10,39,1,0,0,0,12,50,1,0,0,0,14,66,1,0,0,0,16,19,3,2,1,0,17,18,5,1,
0,0,18,20,3,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,23,3,4,2,0,
22,21,1,0,0,0,23,24,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,0,26,
28,3,6,3,0,27,29,3,14,7,0,28,27,1,0,0,0,28,29,1,0,0,0,29,5,1,0,0,0,30,34,
5,14,0,0,31,34,3,8,4,0,32,34,3,10,5,0,33,30,1,0,0,0,33,31,1,0,0,0,33,32,
1,0,0,0,34,7,1,0,0,0,35,36,5,2,0,0,36,37,3,0,0,0,37,38,5,3,0,0,38,9,1,0,
0,0,39,41,5,4,0,0,40,42,5,5,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,
0,43,45,3,12,6,0,44,43,1,0,0,0,45,46,1,0,0,0,46,44,1,0,0,0,46,47,1,0,0,0,
47,48,1,0,0,0,48,49,5,6,0,0,49,11,1,0,0,0,50,51,5,14,0,0,51,52,5,7,0,0,52,
53,5,14,0,0,53,13,1,0,0,0,54,67,5,8,0,0,55,67,5,9,0,0,56,67,5,10,0,0,57,
58,5,11,0,0,58,63,5,15,0,0,59,61,5,12,0,0,60,62,5,15,0,0,61,60,1,0,0,0,61,
62,1,0,0,0,62,64,1,0,0,0,63,59,1,0,0,0,63,64,1,0,0,0,64,65,1,0,0,0,65,67,
5,13,0,0,66,54,1,0,0,0,66,55,1,0,0,0,66,56,1,0,0,0,66,57,1,0,0,0,67,15,1,
0,0,0,9,19,24,28,33,41,46,61,63,66];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class RegexParser extends antlr4.Parser {

    static grammarFileName = "Regex.g4";
    static literalNames = [ null, "'|'", "'('", "')'", "'['", "'^'", "']'", 
                            "'-'", "'*'", "'+'", "'?'", "'{'", "','", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "CHAR", 
                             "NUMBER", "WS" ];
    static ruleNames = [ "regex", "term", "factor", "base", "group", "characterClass", 
                         "range", "quantifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = RegexParser.ruleNames;
        this.literalNames = RegexParser.literalNames;
        this.symbolicNames = RegexParser.symbolicNames;
    }



	regex() {
	    let localctx = new RegexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, RegexParser.RULE_regex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.term();
	        this.state = 19;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 17;
	            this.match(RegexParser.T__0);
	            this.state = 18;
	            this.regex();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, RegexParser.RULE_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 21;
	            this.factor();
	            this.state = 24; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 16404) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, RegexParser.RULE_factor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.base();
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3840) !== 0)) {
	            this.state = 27;
	            this.quantifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	base() {
	    let localctx = new BaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, RegexParser.RULE_base);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            localctx = new CharBaseContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 30;
	            this.match(RegexParser.CHAR);
	            break;
	        case 2:
	            localctx = new GroupBaseContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 31;
	            this.group();
	            break;
	        case 4:
	            localctx = new ClassBaseContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this.characterClass();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, RegexParser.RULE_group);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(RegexParser.T__1);
	        this.state = 36;
	        this.regex();
	        this.state = 37;
	        this.match(RegexParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	characterClass() {
	    let localctx = new CharacterClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, RegexParser.RULE_characterClass);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(RegexParser.T__3);
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 40;
	            this.match(RegexParser.T__4);
	        }

	        this.state = 44; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 43;
	            this.range();
	            this.state = 46; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 48;
	        this.match(RegexParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, RegexParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(RegexParser.CHAR);
	        this.state = 51;
	        this.match(RegexParser.T__6);
	        this.state = 52;
	        this.match(RegexParser.CHAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quantifier() {
	    let localctx = new QuantifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, RegexParser.RULE_quantifier);
	    var _la = 0;
	    try {
	        this.state = 66;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.match(RegexParser.T__7);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.match(RegexParser.T__8);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.match(RegexParser.T__9);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.match(RegexParser.T__10);
	            this.state = 58;
	            this.match(RegexParser.NUMBER);
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12) {
	                this.state = 59;
	                this.match(RegexParser.T__11);
	                this.state = 61;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===15) {
	                    this.state = 60;
	                    this.match(RegexParser.NUMBER);
	                }

	            }

	            this.state = 65;
	            this.match(RegexParser.T__12);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

RegexParser.EOF = antlr4.Token.EOF;
RegexParser.T__0 = 1;
RegexParser.T__1 = 2;
RegexParser.T__2 = 3;
RegexParser.T__3 = 4;
RegexParser.T__4 = 5;
RegexParser.T__5 = 6;
RegexParser.T__6 = 7;
RegexParser.T__7 = 8;
RegexParser.T__8 = 9;
RegexParser.T__9 = 10;
RegexParser.T__10 = 11;
RegexParser.T__11 = 12;
RegexParser.T__12 = 13;
RegexParser.CHAR = 14;
RegexParser.NUMBER = 15;
RegexParser.WS = 16;

RegexParser.RULE_regex = 0;
RegexParser.RULE_term = 1;
RegexParser.RULE_factor = 2;
RegexParser.RULE_base = 3;
RegexParser.RULE_group = 4;
RegexParser.RULE_characterClass = 5;
RegexParser.RULE_range = 6;
RegexParser.RULE_quantifier = 7;

class RegexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_regex;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRegex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRegex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRegex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitTerm(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitTerm(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_factor;
    }

	base() {
	    return this.getTypedRuleContext(BaseContext,0);
	};

	quantifier() {
	    return this.getTypedRuleContext(QuantifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitFactor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitFactor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_base;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CharBaseContext extends BaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CHAR() {
	    return this.getToken(RegexParser.CHAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterCharBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitCharBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitCharBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.CharBaseContext = CharBaseContext;

class GroupBaseContext extends BaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	group() {
	    return this.getTypedRuleContext(GroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterGroupBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitGroupBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitGroupBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.GroupBaseContext = GroupBaseContext;

class ClassBaseContext extends BaseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	characterClass() {
	    return this.getTypedRuleContext(CharacterClassContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterClassBase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitClassBase(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitClassBase(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

RegexParser.ClassBaseContext = ClassBaseContext;

class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_group;
    }

	regex() {
	    return this.getTypedRuleContext(RegexContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitGroup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CharacterClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_characterClass;
    }

	range = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeContext);
	    } else {
	        return this.getTypedRuleContext(RangeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterCharacterClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitCharacterClass(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitCharacterClass(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_range;
    }

	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RegexParser.CHAR);
	    } else {
	        return this.getToken(RegexParser.CHAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class QuantifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = RegexParser.RULE_quantifier;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(RegexParser.NUMBER);
	    } else {
	        return this.getToken(RegexParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.enterQuantifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof RegexListener ) {
	        listener.exitQuantifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof RegexVisitor ) {
	        return visitor.visitQuantifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




RegexParser.RegexContext = RegexContext; 
RegexParser.TermContext = TermContext; 
RegexParser.FactorContext = FactorContext; 
RegexParser.BaseContext = BaseContext; 
RegexParser.GroupContext = GroupContext; 
RegexParser.CharacterClassContext = CharacterClassContext; 
RegexParser.RangeContext = RangeContext; 
RegexParser.QuantifierContext = QuantifierContext; 
