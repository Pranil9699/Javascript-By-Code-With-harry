document.cookie = "UserId=2123";
document.cookie = "SessionId=278";
// getting the key and value from the script through and setting the cookies
let key = prompt("Enter the Key ");
let value = prompt("Enter the Value ");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// after this setting in web page , if you wann the decode that so used 'decoderURIComponent()'
console.log(document.cookie);
