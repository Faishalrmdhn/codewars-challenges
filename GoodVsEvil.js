function goodVsEvil(good, evil){
    const goodWorth = [1,2,3,3,4,10];
    const evilWorth = [1,2,2,2,3,5,10];

    let goodInputCount = parseIntInput(good)
    let evilInputCount = parseIntInput(evil)
    let totalGoodForce = worthForce(goodWorth, goodInputCount)
    let totalEvilForce = worthForce(evilWorth, evilInputCount)

    // change input to become array of integer
    function parseIntInput(val){
        let splitVal = val.split(' ')
        let parseIntVal= splitVal.map((val) => {
            return parseInt(val)
        })
        return parseIntVal
    }

    // sum total amount of force
    function worthForce(val, val2) {
        let result = [];
      
        for (let i = 0; i < val.length; i++) {
          result.push(val[i] * val2[i]);
        }

        // Reduce sum of the force
        let reduceResult = result.reduce((accumulator,currrentValue)=>{
            return accumulator + currrentValue
        },0)
        return reduceResult
      }

    

    // Decide who win
    if (totalGoodForce > totalEvilForce) {
        return 'Battle Result: Good triumphs over Evil'
    } else if(totalGoodForce < totalEvilForce){
        return 'Battle Result: Evil eradicates all trace of Good'
    } else if(totalGoodForce == totalEvilForce) {
        return 'Battle Result: No victor on this battle field'
    }



    
}

console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))

//masih salah karena tiap race itu punya pengkali worth, argumen yg masuk itu bakal dikali dengan worth yg ada di tiap racenya