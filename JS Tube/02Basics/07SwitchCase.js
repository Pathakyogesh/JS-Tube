// Create application with following roles
// admin - get full access
// subadmin - get access to create/delete courses
// testprep - get access to create/delete tests
// user - get access to consume the content

var user = "admin";

switch(user) {
    case "admin":
        console.log("get full access");
        break;
    case "subadmin":
        console.log("get access to create/delete courses");
        break;
    case "testprep":
        console.log("get access to create/delete tests");
        break;
    case "user":
        console.log("get access to consume the content");
        break;
    default:
        console.log("Trial User");
}

// If we do not put break, a fall through will happen and all the logs will get printed after first valid case;