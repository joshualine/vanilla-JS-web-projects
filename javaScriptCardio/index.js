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
  const counter = {};
  let maxNum = 0;
  let maxChar = '';

  splitString.forEach((char) => {
    if (counter[char]) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  })
  
  
  for(let char in counter) {
    if(counter[char] > maxNum) {
      maxNum = counter[char];
      maxChar = char
    }
  }
  return maxChar
}

// 6. FIZZBUZZ
function fizzBuzz(number) {
  if (number <= 100) {
    if (number % 3 && number % 5) {
      console.log('fizzBuzz')
    } else if( number % 3) {
      console.log('Fizz');
    } else if (number % 5) {
      console.log('Buzz')
    }
  } else {
    console.log('select a number within then range of 1 to 100')
  }
  return;
}

// console.log(reverseString("hello"));
// console.log(maxCharacter('javascriptttt'))
console.log(fizzBuzz(20))