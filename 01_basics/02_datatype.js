let age="12pp";
let ageInNum=Number(age); 
// age cannot be converted to number since it contain letters too,
// so ageInNum will be asigned with NaN(Not A Number)


if(Number.isNaN(ageInNum)){
    console.log("its not a number...");
}
else{
    console.log("its a number...");
}



// NaN is of type number
console.log(typeof ageInNum);
