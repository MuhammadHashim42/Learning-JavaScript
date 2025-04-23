const accountId = 186363
let accountName = "Hashim"
var accountPassword = "973469"
accountCity = "Faisalabad"

/*
Prefer not to use var
Because of issue in block scope and funcional scope
*/

accountName = "Naeem"
accountPassword = "mnfvbs"
accountCity = "Lahore"

// console.log(accountId);
// console.log(accountName);
// console.log(accountPassword);
// console.log(accountCity);

console.table([accountId, accountName, accountPassword, accountCity])



