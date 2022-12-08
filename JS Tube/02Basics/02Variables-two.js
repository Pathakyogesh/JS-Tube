const uid = "abc123";                            // This type of variable can not be reassigned

const userName = "Pathak Yogesh";

var fullName = "Yogesh Pathak";

var email = "yogesh@gmail.com";

var password = "12345";

var confirmPassword = "12345";

var isLoggedInFromGoogle = false;

var courseCount = 0;

// We can take input from user using prompt or alert
// var fullName = prompt("Enter your full name : ")

console.log(uid);
console.log("Full Name is: ", fullName);
console.log("Email is: "+ email);

// To print  a string and a variable togather we can use back tics as follows

console.log(`
    With Unique id: ${uid} and Username as: ${userName}
    User is: ${fullName}
    and his email is: ${email}
    and uses the password: ${password}
`)
