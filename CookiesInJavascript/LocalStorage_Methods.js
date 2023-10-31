let key1 = prompt("enter key1")
let value2 = prompt("enter value2")

localStorage.setItem(key1,value2)
console.log(`the key1 is ${key1} and value2 ${localStorage.getItem(key1)}`)
// also having the 
/**
 * localStorage.removeItem(key) - remove that key from localstorage
 * localStorage.clear() - remove all that key from localstorage
 * localStorage.key(key) - get key from localstorage
 */