//problem3: Given an array of string count overall total number of characters

let arr=["Aman","Nrupul", "Varun", "pulkit"];

let total=0;
for (let i=0;i<=arr.length-1;i++){
  let len=arr[i].length; 
  total=total+len;
}

console.log(total);


let count = 0
let str = ''
for(let i=0;i<arr.length;i++){
  str+=arr[i]

  for(let i=0;i<str.length;i++){
    count++
 

  }  

}
console.log(count)