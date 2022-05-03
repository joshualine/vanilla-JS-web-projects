// 1. REVERSE A STRING
function reverseString(str) {
  // return str.split('').reverse().join();

  let revString = '';
  str.split('').forEach(strArr => {
    revString = strArr + revString
  });

  return revString
}

// 2. vALIDATE A PALINDROME
// return true if palindrom and false is not a palindrome

function isPalindrome(str) {
  let reversedString = str.split('').reverse().join('');
  
  return reversedString === str;
}

// 3. REVERSE AN INTEGER

// 4. CAPITALIZED LETTER
function capitalizedLetter(str) {
  // //split the string where there is a space
  // let splitString = str.split(' ');
  // //call toUpperCase for the first letters
  // for (let i = 0; i<= splitString.length -1; i++) {
  //   splitString[i] = splitString[i].substring(0, 1).toUpperCase() +splitString[i].substring(1);
  // }
  // //merge back the splited words tto form sentence
  // return splitString.join(' ');

  let splitString = str.split(' ');
  return splitString.map((word) => {
    return word[0].toUpperCase() + word.substr(1);
  }).join(' ')
  
}

// 5. MAX CHARACTER
function maxCharacter(str) {
  let splitString = str.split('');
  let counter = {};

  splitString.forEach((char) => {
    if (counter[char]) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  })
  console.log(counter);
}

// 6. FIZZBUZZ

// console.log(reverseString("hello"));
console.log(maxCharacter('javascript'))