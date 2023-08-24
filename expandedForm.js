function expandedForm(num) {
    const numArray = Array.from(String(num), Number)

    let newArr = []
    for (let i = 0; i < numArray.length; i++) {
        newArr.push(numArray[i] * 10**(numArray.length-(i+1))) 
    }
    let filterZero = newArr.filter((val)=> {
        return val !== 0
    })

    return filterZero.join(' + ')
}


// 0
// 3-(i+1) = 3-1 = 2

// 1
// 3-(i+1) = 3-2 = 1

// 2
// 3-(i+1) = 3-3 = 0
console.log(expandedForm(70304))
