const string = 'hello world';

class StringController {
    getString(){
        return string;
    }
}

module.exports = new StringController();