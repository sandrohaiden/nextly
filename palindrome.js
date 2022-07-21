function checkPalindrome(word='arara') {
    return word == word.split('').reverse().join('')
}