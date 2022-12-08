// Allow user to access the course if:
// He is logged in from google
// He is logged in from email
// He is logged in from facebook

var google = false;
var email = false;
var facebook = false;

if(google || email || facebook)
{
    console.log("Login Successful !!")
}
else{
    console.log("Invalid Credentials, Login Failed !!")
}