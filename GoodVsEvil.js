function goodVsEvil(good, evil){
// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
    
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