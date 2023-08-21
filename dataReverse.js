//Cara 1
function dataReverse(data) {
    const arrayLength = 8
    let newArr = []
    
    // separate element into 8bit per element
    while (data.length) {
        newArr.push(data.splice(0, arrayLength))
    }
    
  // reverse element
    newArr.reverse()
    const joinElement = []
    
    // join the element 
    for (const array of newArr){
        joinElement.push(...array)
    }

    return joinElement
  }

//Cara 2
  const dataReverse = data => {
  const bytes = [];
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8));
  }
  return bytes;
};
  data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
  dataReverse(data1)
