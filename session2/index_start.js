// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string

  // //create filterd array (without the comma)
  // const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // //sort by length
  // const sorted = wordArr.sort(function(a, b){
  //   return b.length - a.length
  // });
  // // if multiple words same lenght, than put into array
  // const longestWordArr = sorted.filter(function(word) {
  //   return word.length === sorted[0].length;
  // });
  // // check if more than 1 array value
  // if (longestWordArr.length === 1) {
  //   //return the word
  //   return longestWordArr[0];
  // } else {
  //   return longestWordArr;
  // }

  const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  const sorted = wordArr.sort((a, b) => b.length - a.length);
  const longestWordArr = sorted.filter(word => word.length === sorted[0].length);
  if (longestWordArr.length === 1) {
    return longestWordArr[0];
  } else {
    return longestWordArr;
  }
}

  // senArray = sen.split("");
  // var longestWord = 0;
  // for (var i = 0; i < senArray.length; i++) {
  //   if (senArray[i].length > longestWord) {
  //     longestWord = senArray[i].length;
  //   }
  // }
  // return longestWord;

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
//   //init a chunked array
//   const chunkedArr = [];
//   //set index
//   let i =0;
//   //loop while index is less than the array length
//   while(i < arr.length) {
//     //slice out from the index to the index + the chunk length and push to the chunked array
//     chunkedArr.push(arr.slice(i, i + len));
//     //increment by chunk length
//     i += len;
//   }
//   return chunkedArr;
// }

//   //init chunked array
//   const chunkedArr = [];
//   //loop through array
//   arr.forEach(function(val) {
//     //get last element
//     const last = chunkedArr[chunkedArr.length-1]
//     //check if there is a last and if the last length is equal to the chunk length
//     if(!last || last.length === len) {
//       chunkedArr.push([val]);
//     } else {
//       last.push(val);
//     }
//   });
//   return chunkedArr;
// }

//init chunked array
const chunkedArr = [];
//loop through array
arr.forEach(val => {
  //get last element
  const last = chunkedArr[chunkedArr.length-1]
  //check if there is a last and if the last length is equal to the chunk length
  if(!last || last.length === len) {
    chunkedArr.push([val]);
  } else {
    last.push(val);
  }
});
return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  //solution 1
//   return arrays.reduce(function(a, b) {
//     return a.concat(b);
//   });
// }

return arrays.reduce((a, b) => a.concat(b));

//solution 2
// return [].concat.apply([], arrays);

//solution 3
//return [].concat(...arrays);
}


// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}
//helper function
function formatStr() {
  //take out anything that doesnt match a word character and replace that with an empty string
  //then after lowercase we need to sort everything, not just string, need to put into an array,
  //where each array value is a letter or a character, so each character has its own array value
  //join() turns it back into a string
  return str.replace(/[^\w]/g,  "").toLowerCase().split("").sort().join("")
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
//   let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char) {
//     //if z it should be an a
//     if(char === 'z' || char === 'Z') {
//       return 'a';
//     } else {
//       //if not z, every letter in alaphabet has a character code, so take String object
//       //and get it and add one to get next letter
//       return String.fromCharCode(char.charCodeAt() + 1);
//     }
//   });
//   newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel) {
//     return vowel.toUpperCase();
//   })
//   return newStr;
// }

let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
  if(char === 'z' || char === 'Z') {
    return 'a';
  } else {
    return String.fromCharCode(char.charCodeAt() + 1);
  }
});
newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
return newStr;
}

// Call Function
//const output = longestWord('Hello, my name is Brad');
//const output = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
//const output = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
//const output = isAnagram('elbow', 'below');
const output = letterChanges('Hello There');
console.log(output);
