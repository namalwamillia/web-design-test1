// javascript fuction that takes UpperCase and LoweCase
//

function convertCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

console.log(convertCase("hElLo"))
 

