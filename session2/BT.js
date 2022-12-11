//BT1
const input1 = "Hello, I am Anna"

let output1 = input1.split("").reverse().join("")
console.log (output1)

//BT2

const arr = [1, 2, 3, 5, 4, 2, 6, 4]
const initialArr = [];
const rs = arr.reduce((result, item) => {
    // console.log("result: ",result)
    // console.log("item: ", item)
    // console.log();
    for (let i = 0; i < result.length; i++) {
        if (result[i] === item) {
            return result;
        }
    }
    result.push(item);
    return result;
}, initialArr);
console.log(rs);




//BT3
//Cach 1
const input3 = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
console.log(input3.sort())
function find (input3) {
    input3.sort();
    let time = 0;
    let value = 0;
    let count = 1;
    for ( let i=0; i<input3.length-1; i++) {
        if (input3[i]==input3[i+1]) count++;
        else {
            if (time < count)
            { 
                value = input3[i];
                time = count;   
           }
           count = 1;
         }
    }
    console.log( "Phần tử "+value+" xuất hiện nhiều nhất với "+time+" lần");
}

find (input3)

//Cach 2
const arr1 = [1, 4, 3, 3, 5, 3, 1, 3, 6];
      let time = 0;
      let item;
      for (let i = 0; i < arr1.length; i++) {
        let count = 0;
        for (let j = i; j < arr1.length; j++) {
          if (arr1[i] == arr1[j]) count++;
          if (time < count) {
            time = count;
            item = arr1[i];
          }
        }
      }
      console.log(`${item} ( ${time} times ) `);