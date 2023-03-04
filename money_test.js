const assert = require('assert');

class Money {
    constructor(number, currency) {
       this.amount = number;
       this.currency = currency;
    }

    times(multiplier) {
       return new Money(this.amount*multiplier, this.currency);
    }

    divide(divider) {
        return new Money(this.amount/divider, this.currency);
    }
}


class testMoneyModule {

    dollar_should_be_able_to_do_times_calculate_with_currency() {
        var eurFiver = new Money(5, "EUR");
        let eurTenner = eurFiver.times(2);
        var expectedEurTenner = new Money(10,"EUR");
        assert.deepStrictEqual(eurTenner, expectedEurTenner);
    }

    dollar_should_be_able_to_do_divide_calculate_with_currency() {
        var krwTenner = new Money(10, "KRW");
        var krwFiver = krwTenner.divide(2);
        var expectedKrwFiver = new Money(5, "KRW");
        assert.deepStrictEqual(krwFiver, expectedKrwFiver);
    }

    RunAllTest() {
        this.dollar_should_be_able_to_do_times_calculate_with_currency()
        this.dollar_should_be_able_to_do_divide_calculate_with_currency()
    }
}

var moneyModule = new testMoneyModule();
moneyModule.RunAllTest();