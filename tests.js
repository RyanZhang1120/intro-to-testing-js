// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
})

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello(true)).toBe("string");
    });
    it('should return the string "Hello, World!" when input true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when input false', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello(true)).not.toBe(undefined);
    });
});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return the ture  when input 5', function() {
        expect(isFive(5)).toBe(true);
    });
});

describe('isEven', function() {
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return the ture  when input 2', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return the ture  when input -4', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return the false  when input 3', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return the false  when input \'banana\'', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should return the ture  when input \'8\'', function() {
        expect(isEven('8')).toBe(true);
    });
    it('should return the false  when input Infinity', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when called with a boolean input', function() {
        expect(isEven(true)).toBe(false) && expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return the ture  when input a', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('should return the ture  when input A', function() {
        expect(isVowel('A')).toBe(true);
    });
    it('should return the false  when input y', function() {
        expect(isVowel('y')).toBe(false);
    });
    it('should return the false when input 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when called with a boolean input', function() {
        expect(isVowel(true)).toBe(false) && expect(isVowel(false)).toBe(false);
    });
    it('should return the false  when input \'banana\'', function() {
        expect(isEven('banana')).toBe(false);
    });
    it('should return false when called without an argument', function() {
        expect(isVowel()).toBe(false);
    });
});