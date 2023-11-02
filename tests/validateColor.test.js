const validateColor = require('../lib/validateColor');

test('valid colors should return true', () => {
  expect(validateColor('#FFFFFF')).toBe(true);
  expect(validateColor('red')).toBe(true);
  expect(validateColor('limegreen')).toBe(true);
});

test('invalid colors should return error message', () => {
  expect(validateColor('invalidcolor')).toBe('Please enter a valid CSS color name or hex value.');
  expect(validateColor('#12345')).toBe('Please enter a valid CSS color name or hex value.');
  expect(validateColor('')).toBe('Please enter a valid CSS color name or hex value.');
});
