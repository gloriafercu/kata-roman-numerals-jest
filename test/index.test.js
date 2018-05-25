const application = require('../src/index');

describe ('RomanNumerals', () => {
	test('converts 1 to Roman numeral (I)', () => {
		expect(application().romanizerNumerals(1)).toBe('I');
	});
	test('converts 2 to Roman numeral (II)', () => {
		expect(application().romanizerNumerals(2)).toBe('II');
	});
	test('converts 3 to Roman numeral (III)', () => {
		expect(application().romanizerNumerals(3)).toBe('III');
	});
	test('converts 4 to Roman numeral (IV)', () => {
		expect(application().romanizerNumerals(4)).toBe('IV');
	});
	test('converts 5 to Roman numeral (V)', () => {
		expect(application().romanizerNumerals(5)).toBe('V');
	});
	test('converts 6 to Roman numeral (VI)', () => {
		expect(application().romanizerNumerals(6)).toBe('VI');
	});
	test('converts 7 to Roman numeral (VII)', () => {
		expect(application().romanizerNumerals(7)).toBe('VII');
	});
	test('converts 8 to Roman numeral (VIII)', () => {
		expect(application().romanizerNumerals(8)).toBe('VIII');
	});
	test('converts 9 to Roman numeral (IX)', () => {
		expect(application().romanizerNumerals(9)).toBe('IX');
	});
	test('converts 10 to Roman numeral (X)', () => {
		expect(application().romanizerNumerals(10)).toBe('X');
	});
	test('converts 11 to Roman numeral (XI)', () => {
		expect(application().romanizerNumerals(11)).toBe('XI');
	});
	test('converts 12 to Roman numeral (XII)', () => {
		expect(application().romanizerNumerals(12)).toBe('XII');
	});
	test('converts 13 to Roman numeral (XIII)', () => {
		expect(application().romanizerNumerals(13)).toBe('XIII');
	});
	test('converts 14 to Roman numeral (XIV)', () => {
		expect(application().romanizerNumerals(14)).toBe('XIV');
	});
	test('converts 15 to Roman numeral (XV)', () => {
		expect(application().romanizerNumerals(15)).toBe('XV');
	});
	test('converts 20 to Roman numeral (XX)', () => {
		expect(application().romanizerNumerals(20)).toBe('XX');
	});
	test('converts 40 to Roman numeral (XL)', () => {
		expect(application().romanizerNumerals(40)).toBe('XL');
	});
	test('converts 50 to Roman numeral (L)', () => {
		expect(application().romanizerNumerals(50)).toBe('L');
	});
	test('converts 90 to Roman numeral (XC)', () => {
		expect(application().romanizerNumerals(90)).toBe('XC');
	});
	test('converts 100 to Roman numeral (C)', () => {
		expect(application().romanizerNumerals(100)).toBe('C');
	});
	test('converts 400 to Roman numeral (CD)', () => {
		expect(application().romanizerNumerals(400)).toBe('CD');
	});
	test('converts 500 to Roman numeral (D)', () => {
		expect(application().romanizerNumerals(500)).toBe('D');
	});
	test('converts 900 to Roman numeral (CM)', () => {
		expect(application().romanizerNumerals(900)).toBe('CM');
	});
	test('converts 1000 to Roman numeral (M)', () => {
		expect(application().romanizerNumerals(1000)).toBe('M');
	});
	test('converts 2356 to Roman numeral (MMCCCLVI)', () => {
		expect(application().romanizerNumerals(2356)).toBe('MMCCCLVI');
	});
	test('converts 4999 to Roman numeral (MMMMCMXCIX)', () => {
		expect(application().romanizerNumerals(4999)).toBe('MMMMCMXCIX');
	});
	test('Too large romanizer output)', () => {
		expect(application().romanizerNumerals(5000)).toBe('Sorry, the Romans could not count this high!');
	});
	test('Negative romanizer output)', () => {
		expect(application().romanizerNumerals(-10)).toBe('Sorry, the Romans did not use number lower than 1!');
	});
});
