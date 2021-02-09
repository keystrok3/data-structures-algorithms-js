"use strict"

// Convert binary to decimal
function binary2decimal(binary_str) {
    let binarr = binary_str.split("");
    let dec = 0, j = binarr.length - 1;
    for(let i = 0; i < binarr.length; i++) {
        dec = dec + (parseInt(binarr[i]) * Math.pow(2, j));
        j--;
    }
    return dec;
}

// convert binary to decimal
function decimal2binary(num) {
    let binstr = '';
    while(num !== 0) {
        binstr += num % 2;
        num = Math.floor(num/2);
    }
    return binstr
}