function isPalindrome(string) {
    let result = "";
    for (let charIndex = string.length - 1; charIndex >= 0; charIndex--) {
        result += string[charIndex];
    }
    return string === result;
}