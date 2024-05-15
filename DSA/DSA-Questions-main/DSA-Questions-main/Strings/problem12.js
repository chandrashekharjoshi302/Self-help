let names=["AMITt", "NRUPUL", "AMAN", "VARUN" , "Arya"];

//count the names that contain atleast 1 "A"
let countt = 0;
let strr = "";
for(let i=0;i<names.length;i++){
   strr = names[i]
   for(let i=0;i<strr.length;i++){
    if(strr[0]=="A"){
      console.log(strr[0])
      countt++
      break
    }
  }

}




console.log('how namy A names',countt)


















let count=0;

//parent loop is to visit each and every name
for (let i=0;i<=names.length-1;i++){
  let string=names[i];
  //child loop is to visit each and every character of the name
  for(let j=0;j<string.length-1;j++){
    if(string[j]=="A"){
      count++;
      break;
    }
  }
}
console.log(count);