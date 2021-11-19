function reverseString(message){
  return [...message].reverse().join("")
}

function palindrome(message){
  return message === reverseString(message);
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true