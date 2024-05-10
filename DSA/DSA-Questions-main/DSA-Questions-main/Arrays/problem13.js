// write a code to delete last 3 elemets from the array

let arr=[1,2,3,4,5,6,7,8,9];

for (let i=1;i<=3;i++){
  arr.pop();
}


console.log(arr);









let array = [1,2,3,4,5,6,9,7]

let target = 3

let result = []

for(let i=0;i<array.length-target;i++){

  result.push(array[i])
}

console.log(result)
