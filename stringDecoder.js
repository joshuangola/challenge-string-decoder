

// function decoder(code) {
//     let result = "";
//     let index = 0;
//     while (index < code.length) {
//       let skip = parseInt(code[index]);
//       index += skip + 1;
//       result += code[index];
//       index++;
//     }
//     return result;
//   }
  
//   console.log(decoder('0h2xce5ngbrdy'))


//   function decoder(code) {
//     let result = "";
//     for (let index = 0; index < code.length; index++;) {
//       let skip = parseInt(code[index]);
//       index += skip + 1;
//       result += code[index];
//       
//     }
//     return result;
//   }
  


// console.log(parseInt('0h2xce5ngbrdy'));





const decoder = code => {
    let newCode = code.split('');
    let mappedCode = newCode.map(Number);
    let decoded = '';
    for(let i = 0; i < newCode.length; i++){
        if(typeof(mappedCode[i]) === "number"){
            i += +mappedCode[i];
        }
        else{
            decoded += newCode[i];
        }
    }
    return decoded;
}
console.log(decoder('0h2xce5ngbrdy'))
