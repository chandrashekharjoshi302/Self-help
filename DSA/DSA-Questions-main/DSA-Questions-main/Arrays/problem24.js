

// Given an array find the sum with alternate addition and subtraction

let arr = [5,1,6,2,8,3];

// sum = 5+1-6+2-8+3

let sum = 0;

for(let i=0; i<arr.length; i++)
{
  if(i%2==0){
    sum = sum + arr[i];
  }
  else{
    sum = sum - arr[i];
  }
}

console.log(sum);




let array =  [5,1,6,2,8,3];
let single = 0

for(let i=0;i<array.length;i++){

  if(i%2==0){
    single+=array[i]



  }else{
    single-=array[i]


  }
}

console.log(single)