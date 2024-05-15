
// Problem 3 : Count the occurence of each character

// madras

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

for(let x in diary ){
  console.log(x,"-",diary[x]);
}


let Charone = "chandrashekhar";

let object = {}

for(let i=0;i<str.length;i++){
  
  let chardata = str[i]

  if(object[chardata]==undefined){
    object[chardata] = 1

  }else{
    object[chardata]++
  }
}

console.log(object)



// https://drive.google.com/file/d/1lMCy-fExJRdsOPLLT02gwYRIZJ3kLuOl/view?usp=sharing