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
    : CHAR '-' CHAR
    | CHAR
    ;

quantifier
    : '*' | '+' | '?' | '{' NUMBER (',' NUMBER?)? '}'
    ;

// Tokens
CHAR   : ~[0-9|()*+?{}[\]\r\n];
NUMBER : [0-9]+ ;
WS     : [ \t\r\n]+ -> skip ;