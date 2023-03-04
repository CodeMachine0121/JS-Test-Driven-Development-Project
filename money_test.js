const assert = require('assert');

class Dollar {

    constructor(number) {
       this.amount = number;
    }

    times(multiplier) {
       return new Dollar(this.amount*multiplier);
    }
}

var fiver = new Dollar(5);
var tenner = fiver.times(2);
assert.strictEqual(tenner.amount, 10);


