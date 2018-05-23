const romanNumerals = require('./index');

describe ('RomanNumerals', () => {
	test('converts 1 to Roman numeral (I)', () => {
		expect(romanNumerals(1)).toBe('I');
	});
	test('converts 2 to Roman numeral (II)', () => {
		expect(romanNumerals(2)).toBe('II');
	});
	test('converts 3 to Roman numeral (III)', () => {
		expect(romanNumerals(3)).toBe('III');
	});
	test('converts 4 to Roman numeral (IV)', () => {
		expect(romanNumerals(4)).toBe('IV');
	});
	test('converts 5 to Roman numeral (V)', () => {
		expect(romanNumerals(5)).toBe('V');
	});
	test('converts 6 to Roman numeral (VI)', () => {
		expect(romanNumerals(6)).toBe('VI');
	});
	test('converts 7 to Roman numeral (VII)', () => {
		expect(romanNumerals(7)).toBe('VII');
	});
	test('converts 8 to Roman numeral (VIII)', () => {
		expect(romanNumerals(8)).toBe('VIII');
	});
	test('converts 9 to Roman numeral (IX)', () => {
		expect(romanNumerals(9)).toBe('IX');
	});
	test('converts 10 to Roman numeral (X)', () => {
		expect(romanNumerals(10)).toBe('X');
	});
	test('converts 11 to Roman numeral (XI)', () => {
		expect(romanNumerals(11)).toBe('XI');
	});
	test('converts 12 to Roman numeral (XII)', () => {
		expect(romanNumerals(12)).toBe('XII');
	});
	test('converts 13 to Roman numeral (XIII)', () => {
		expect(romanNumerals(13)).toBe('XIII');
	});
	test('converts 14 to Roman numeral (XIV)', () => {
		expect(romanNumerals(14)).toBe('XIV');
	});
	test('converts 15 to Roman numeral (XV)', () => {
		expect(romanNumerals(15)).toBe('XV');
	});
	test('converts 20 to Roman numeral (XX)', () => {
		expect(romanNumerals(20)).toBe('XX');
	});
	test('converts 40 to Roman numeral (XL)', () => {
		expect(romanNumerals(40)).toBe('XL');
	});
	test('converts 50 to Roman numeral (L)', () => {
		expect(romanNumerals(50)).toBe('L');
	});
	test('converts 90 to Roman numeral (XC)', () => {
		expect(romanNumerals(90)).toBe('XC');
	});
	test('converts 100 to Roman numeral (C)', () => {
		expect(romanNumerals(100)).toBe('C');
	});
	test('converts 400 to Roman numeral (CD)', () => {
		expect(romanNumerals(400)).toBe('CD');
	});
	test('converts 500 to Roman numeral (D)', () => {
		expect(romanNumerals(500)).toBe('D');
	});
	test('converts 900 to Roman numeral (CM)', () => {
		expect(romanNumerals(900)).toBe('CM');
	});
	test('converts 1000 to Roman numeral (M)', () => {
		expect(romanNumerals(1000)).toBe('M');
	});
	test('converts 4999 to Roman numeral (MMMMCMXCIX)', () => {
		expect(romanNumerals(4999)).toBe('MMMMCMXCIX');
	});
	test('Too large romanizer output)', () => {
		expect(romanNumerals(5000)).toBe('Sorry, the Romans could not count this high!');
	});
	test('Negative romanizer output)', () => {
		expect(romanNumerals(-10)).toBe('Sorry, the Romans did not use number lower than 1!');
	});
});
