const accountId = 144553
let accountEmail  = "chontu12@gmail.com"
var accountPassword = "3442"
accountcity = "Bhubaneswar"

// accountId = 2 // not allowed

accountEmail = "vhhi@gmail.com"
accountPassword = "12333"
accountcity = "Mumbai"
/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword , accountcity])