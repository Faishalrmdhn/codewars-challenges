function expandedForm(num) {
    const numArray = Array.from(String(num), Number)
    console.log(numArray)
    let newArr = []
    // console.log(`numArray.length = ${numArray.length}`)
    for (let i = 0; i < numArray.length; i++) {
        newArr.push(numArray[i] * 10**(numArray.length-(i+1))) 
        // console.log(numArray[i] * 10**(numArray.length-(i+1)))
    }
    console.log(newArr)
    newArr.reduce((acc, curr)=>{
        acc + curr
    })

    console.log(`ini setelah direduce ${newArr}`)
}


// 0
// 3-(i+1) = 3-1 = 2

// 1
// 3-(i+1) = 3-2 = 1

// 2
// 3-(i+1) = 3-3 = 0
console.log(expandedForm(123))