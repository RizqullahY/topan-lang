import arranger from '../../other/h-tools/math/aritmethic_arranger.mjs'
import assert from "assert";

describe('Arithmetic Arranger', () => {
    it("1. simple test without display answer", () => {
        assert.strictEqual(
            arranger(["3801 - 2", "123 + 49"]),
            '  3801      123\n-    2    +  49\n------    -----'
        );
    });
});
