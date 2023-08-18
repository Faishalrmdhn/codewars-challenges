function solution(str){
    if (str.length % 2 !== 0){
        str+='_'
    }
    let myArr = []
    for(let i = 0; i <str.length; i+=2 ){
        myArr.push(str[i]+str[i+1])
    }
   return myArr
 }

 console.log(solution('abcdefg'))