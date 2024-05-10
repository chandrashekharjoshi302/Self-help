//problem3:find the average of even numbers only

let arr=[1,2,3,4,5,6];

let sum=0;
let count=0;

for (let i=0;i<=arr.length-1;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count);





let array = [1,2,3,4,5,6,7,8,9,10]

let countt = array.length
let summ = 0

for (let index = 0; index < array.length; index++) {
 
  summ+=array[index]

  
}
console.log("outout is " + summ/countt)

