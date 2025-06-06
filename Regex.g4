grammar Regex;

regex
    : term ('|' regex)? ;

term
    : factor+ ;

factor
    : base quantifier? ;

base
    : CHAR                # CharBase
    | group               # GroupBase
    | characterClass      # ClassBase ;

group
    : '(' regex ')' ;

characterClass
    : '[' '^'? range+ ']' ;

range
    : CHAR '-' CHAR ;

quantifier
    : '*' | '+' | '?' | '{' NUMBER (',' NUMBER?)? '}' ;

// Tokens
CHAR : ~'|' '(' ')' '*' '+' '?' '{' '}' '[' ']' '\n' '\r';
NUMBER  : [0-9]+ ;
WS      : [ \t\r\n]+ -> skip ;