const { isPalindrome } = require('../index');

describe("Initial Test", () => {

    test("Should pass with a basic test", () => {});
});

describe("Test for palindrome function", () => {
    test("isPalindrome function should exist", () => {
        expect(isPalindrome()).toBeDefined();
    })
    test("isPalindrome takes one argument only", () => {
        expect(isPalindrome.length).toBe(1)
    })
    test("Expect boolean argument to fail", () => {
        expect(isPalindrome(true)).toBe(false);
    }) 
     test("Expect number argument to fail", () => {
        expect(isPalindrome(123)).toBe(false);
    })
    test("Expect array argument to fail", () => {
        expect(isPalindrome([])).toBe(false);
    })
});

describe("Testing to see if basic palindrome", () => {
    test("Should pass with racecar", ()=> {
        expect(isPalindrome("racecar")).toBe(true);
    })
    test("Should pass with bob", ()=> {
        expect(isPalindrome("bob")).toBe(true);
    })
    test("Should fail with apple", ()=> {
        expect(isPalindrome("apple")).toBe(false);
    })
});

describe("Testing to see if outlier palindrome", () => {
    test("Should pass with madam im adam", () => {
        expect(isPalindrome("madam im adam")).toBe(true);
    })
    test("Should pass with Madam I'm Adam", () => {
        expect(isPalindrome("Madam I'm Adam")).toBe(true);
    })
    test("Should pass with Red rum, sir, is murder", () => {
        expect(isPalindrome("Red rum, sir, is murder")).toBe(true);
    })
    test("Should fail with Race car's", () => {
        expect(isPalindrome("Race car's")).toBe(false);
    })
});
    describe("Testing a really long palindrome", () => {
          const sentence = "Are we not pure? \"No, sir!\" Panama's moody Noriega brags. \"It is garbage!\" Irony dooms a man-a prisoner up to new era."
        
        test("Should pass with the 'Panama' statements", () => {
            expect(isPalindrome(sentence)).toBe(true);
        })
        test("Should fail with the 'Panama' statements by removing text", () => {
            expect(isPalindrome(sentence.slice(1, sentence.length))).toBe(false);
        })
   
});