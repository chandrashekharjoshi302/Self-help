// Problem 3 : print all characters whose count is one

// madras

// m - 1
// a - 2
// d - 1
// r - 1
// s - 1

// OUTPUT
// mdrs

let str = "madras";


let diary = {};

for(let i=0; i<str.length; i++)
{
  let char = str[i];

  if(diary[char]==undefined){
    diary[char] = 1;
  }
  else{
    diary[char] = diary[char] + 1;
  }
}

let jhola = "";
for(let x in diary ){
  
  if(diary[x] == 1){
    jhola = jhola + x;
  }
  
}

console.log(jhola);