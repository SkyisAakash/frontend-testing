// const sum = require('./sum');
import sum from './start/sum';
describe('Sum', () => {
    it ("adds two numebrs", () => {
        expect(sum(1,3)).not.toBe(40);
    });
});

test('Truthiness', () => {
    expect(false).toBeFalsy()
    expect(true).toBeTruthy()
})