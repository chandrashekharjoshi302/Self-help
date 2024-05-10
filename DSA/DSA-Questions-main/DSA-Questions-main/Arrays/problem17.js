let arr=[1, 4, 6, 5, 3, 7, 2];

//print the maximu element

let notebook= -Infinity;

for (let i=0;i<=arr.length-1;i++){
  if(arr[i]>notebook){
    notebook=arr[i];
  }
}

console.log(notebook);


let array = [1,2,30,4,5]
let max = array[0]
for(let i=0;i<array.length;i++){

  if(max<array[i]){
    max = array[i]
  }

}
console.log(max)