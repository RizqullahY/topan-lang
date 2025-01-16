import arranger from '../../other/h-tools/math/aritmethic_arranger.mjs'
import assert from "assert";

describe('Arithmetic Arranger', () => {
    it("simple test without display answer", () => {
        assert.strictEqual(
            arranger(["3801 - 2", "123 + 49"]),
            '  3801      123\n-    2    +  49\n------    -----'
        );
    });

    it("simple test with addition and subtraction", () => {
        assert.strictEqual(
            arranger(["1 + 2", "1 - 9380"]),
            '  1         1\n+ 2    - 9380\n---    ------'
        );
    });

    it("multiple problems", () => {
        assert.strictEqual(
            arranger(["3 + 855", "3801 - 2", "45 + 43", "123 + 49"]),
            '    3      3801      45      123\n+ 855    -    2    + 43    +  49\n-----    ------    ----    -----'
        );
    });

    it("additional problems with more complexity", () => {
        assert.strictEqual(
            arranger(["11 + 4", "3801 - 2999", "1 + 2", "123 + 49", "1 - 9380"]),
            '  11      3801      1      123         1\n+  4    - 2999    + 2    +  49    - 9380\n----    ------    ---    -----    ------'
        );
    });

    it("Error case: too many problems", () => {
        assert.strictEqual(
            arranger(["44 + 815", "909 - 2", "45 + 43", "123 + 49", "888 + 40", "653 + 87"]),
            'Error: Too many problems!'
        );
    });

    it("Error case: invalid operator", () => {
        assert.throws(
            () => arranger(["3 / 855", "3801 - 2", "45 + 43", "123 + 49"]),
            Error,
            "Error: Operator must be '+' or '-'."
        );
    });

    it("Error case: numbers too large", () => {
        assert.throws(
            () =>
            arranger(["24 + 85215", "3801 - 2", "45 + 43", "123 + 49"]), Error, 
            'Error: Numbers cannot be more than four digits.'
        );
    });

    it("Error case: non-digit characters", () => {
        assert.throws(
            () =>
            arranger(["98 + 3g5", "3801 - 2", "45 + 43", "123 + 49"]), Error,
            'Error: Numbers must only contain digits.'
        );
    });

    it("Test with answers displayed", () => {
        assert.strictEqual(
            arranger(["3 + 855", "988 + 40"], true),
            '    3      988\n+ 855    +  40\n-----    -----\n  858     1028'
        );
    });

    it("Multiple problems with answers displayed", () => {
        assert.strictEqual(
            arranger(["32 - 698", "1 - 3801", "45 + 43", "123 + 49", "988 + 40"], true),
            '   32         1      45      123      988\n- 698    - 3801    + 43    +  49    +  40\n-----    ------    ----    -----    -----\n -666     -3800      88      172     1028'
        );
    });
});

