
import createObj from './createObj';

describe('createObj', () => {
    it ("['a','b'],[1,2] => {a:1,b:2}", () => {
        expect(createObj(['a','b'],[1,2])).toEqual({a:1,b:2});
        // cant use toBe here as it checks object equality whereas toEqual checks all the elements and not the object as a whole
    });
});