//print the second half of the array

let arr=[1, 4, 5, 7, 8, 33, 88, 99];

let start=0;

if(arr.length%2==0){
  start=arr.length/2;
} else {
  start=(arr.length+1)/2
}

for (let i=start;i<=arr.length-1;i++){
  console.log(arr[i]);
}




let array = [1,2,3,4,5,6,7]

let target = Math.ceil(array.length/2)



for(let i=target;i<array.length;i++){
  console.log(array[i])

}