// Find the count of those elements which are greater than its neighbour elements.
//   Note : Do not include first and last element



let array = [5,1,6,2,8,3];

let bigger = 0

for(let i=1;i<array.length-1;i++){
  if(array[i]>array[i+1] || array[i]>array[i-1]){
    bigger++
  }
}

console.log(bigger)


















let arr = [5,1,6,2,8,3];

// count : 2

let count=0;

for(let i=1; i<arr.length-1; i++)
{
  if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
    console.log("Elements",arr[i]);
    count++;
  }
}

console.log(count);