
function countLetters(sChars){
var oResult = {};

for(var i = 0; i < sChars.length; i++){
  if (oResult[sChars[i]] === undefined){
    oResult[sChars[i]] = 1;
  }else{oResult[sChars[i]]++;}
}
return(oResult);

}

var uInput = process.argv.slice(2);
var sInput = uInput.join("");

console.log(countLetters(sInput));