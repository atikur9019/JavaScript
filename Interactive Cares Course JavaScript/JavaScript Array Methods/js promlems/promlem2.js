function countPairs(str) {
    let count = 0;
    for (let i = 0; i < str.length - 1; i+=2) {
        // console.log(str[i+1])
        if(parseInt(str[i]) % 2 == 0) {
            count++;
            console.log(str[i])
        }
    }
    return count;
}

console.log(countPairs("a1b2c3d4e5f6"));