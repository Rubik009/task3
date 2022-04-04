const number = {
    num : 123n
}

class BigNumberIntController {
    getNumber(){
        return ` typeof of ${number.num} is ${typeof number.num}`;
    }
}

module.exports = new BigNumberIntController();