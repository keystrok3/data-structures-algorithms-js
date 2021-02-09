"use strict"

// Takes a string containing parenthesis and returns true if 
// they're balanced: ({{}[]})
function paren_balanced(str) {
    let str_arr = str.split("");
    let stack = [];

    let paren_open = ['(', '{', '['], paren_close = [')', '}', ']'];

    for(let i = 0; i < str_arr.length; i++ ) {
        if(paren_open.includes(str_arr[i])) {
            stack.push(str_arr[i]);
            continue;
        }
        
        if(paren_close.includes(str_arr[i])) {
            if(paren_open.indexOf(stack[stack.length - 1]) === paren_close.indexOf(str_arr[i])) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(paren_balanced('((){}{}[]'));
console.log(paren_balanced('(()){}{}[]'));