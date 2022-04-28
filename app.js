function splitAndSort(input) {
    let arr = input.split(" ")
    let newRR = arr.filter(item => { if(item.length > 1){
        let itemArr = item.split("")
        console.log(itemArr);
        let filterArr = itemArr.filter((ppp => ppp.charCodeAt()> 96 && ppp.charCodeAt()< 123 ))
        console.log(filterArr)
        return itemArr;
    }
        
    })
    newRR.sort()
    return newRR
    // your results should come here
}
console.log(splitAndSort('A quick brown f0x jumps 0ver the lazy dog'))

