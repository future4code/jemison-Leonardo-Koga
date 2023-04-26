const stringCompression = (input: string) => {
    const substrings = [];
    let lastChar = input [0];
    let charCount = 0;

    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount)
            lastChar = char
            charCount = 0
        }
        charCount++
    }

    substrings.push (lastChar + charCount)
    let result = ""
    for (const key of substrings) {
        result += key
    }

    return result.length > input.length ? input: result
}

//testes

console.log("1-", stringCompression("aabbb"));
console.log("2-", stringCompression("aabcccccaaa"));
console.log("3-", stringCompression("accurate"));
console.log("4-", stringCompression("escola"));
console.log("5-", stringCompression("e1s1c1o1l1a1"));
console.log("6-", stringCompression("accuraaaaaaaaaate"));





