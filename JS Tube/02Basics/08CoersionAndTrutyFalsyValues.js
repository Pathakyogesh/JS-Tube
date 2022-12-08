// undefined - Any variable which is declared but not defined
// null - an empty value
// 0 - a number
// '' - an empty string
// NaN - Not A Number, anything which is not a number
// All the above values are falsy values in javascript i.e their boolean value is false.
// And all other values are except these are truthy values.

var myVar1;

if(myVar1){
    console.log("The value is true");
}
else{
    console.log("The Value is false");
}

var myVar2 = "2"                                                   // if any data type is not defined for a value by default it is taken as string.

if(myVar2 == 2){                                                   // == only checks for values equality
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}

if(myVar2 === 2){                                                 // while === does a strict checking and checks for data type as well
    console.log("Condition is true");
}
else{
    console.log("Condition is false")
}

