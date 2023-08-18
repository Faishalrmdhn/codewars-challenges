orce > totalEvilForce) {
        return 'Battle Result: Good triumphs over Evil'
    } else if(totalGoodForce < totalEvilForce){
        return 'Battle Result: Evil eradicates all trace of Good'
    } else if(totalGoodForce == totalEvilForce) {
        return 'Battle Result: No victor on this battle field'
    }