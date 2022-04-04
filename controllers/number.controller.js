const number = {
    num : 123
}

class NumberController {
    getNumber(){
        return ` typeof of ${number.num} is ${typeof number.num}`;
    }
}

module.exports = new NumberController();