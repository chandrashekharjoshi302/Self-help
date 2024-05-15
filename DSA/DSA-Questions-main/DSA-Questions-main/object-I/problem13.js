//problem1: Given an array find the unique item in the array.

let arr=["Aman", "Ajay", "Aman", "Varun", "Pulkit", "Pulkit"];



let obj={};

for (let i=0;i<=arr.length-1;i++){
  let person=arr[i];
  obj[person]=1; // if present update it, if absent add it
}
console.log(obj);

let obj2 =  {}

for(let i=0;i<arr.length-1;i++){
  let nema = arr[i]
  obj2[nema]=nema
}
console.log(obj2)
