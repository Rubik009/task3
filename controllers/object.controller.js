const obj = {
    name : 'roman',
    age: 25
}

class ObjectController {
    getObject(){
        return obj;
    }
}

module.exports = new ObjectController();