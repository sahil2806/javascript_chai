const accountId =  14453
let accountEmail = "sahilsahu2806@gmail.com"
var account_Password = "12345"
accountCity = "jaipur"  /* This is not a good practice */
/* Prefer not to use var because of issue in block scope or functional scope   */
/*Always use const and let.    If we assign the value in cosnt variable we can not change the value in a whole program  but in case of let we can change the value of variable*/
console.log(accountId)
console.table([accountId,accountEmail,account_Password,accountCity])