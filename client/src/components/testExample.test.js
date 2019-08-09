import { multiply } from './testExample';

describe('Test example', () => {


    describe('multiply()', () => {
        it('return product(*) of two numbers', () => {
            expect(multiply(10, 5)).toBe(50)
        })
    })
})

