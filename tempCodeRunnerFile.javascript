function expandedForm(num) {
    const numArray = Array.from(String(num), Number)
    console.log(numArray)
    let newArr = []
    // console.log(`numArray.length = ${numArray.length}`)
    for (let i = 0; i < numArray.length; i++) {
        // return newArr.push(numArray[i] * 10**(numArray.length-(i+1))) 
       return console.log(numArray[i] * 10**(numArray.length-(i+1)))
    }
}

expandedForm(123)