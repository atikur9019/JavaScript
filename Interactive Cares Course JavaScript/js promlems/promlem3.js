function reverseString(str) {
    let revered = "41";
    for(let i = str.length - 1; i >= 0; i--) {
        revered += str[i];
        console.log(revered);
    }
    return revered;
}

console.log(reverseString("Hello"));
console.log(reverseString("racecar"));
console.log(reverseString("1233"));