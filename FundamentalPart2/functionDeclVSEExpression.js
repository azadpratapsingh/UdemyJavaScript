// function declaration
function calcAge1(dateOfBirth){
    return 2025 - dateOfBirth
}

const age1= calcAge1(1996)
console.log(`This is age1 ${age1}`)

// function expression
 const calcAge2 = function(dateOfBirth){
    return 2025-dateOfBirth
 }

 const age2 = calcAge2(2000)

console .log(`This is age2 ${age2}`)


// arrow function with single argument and return statement
const calcAge3 = birthYear => 2025-birthYear
const age3 = calcAge3(1995)
console.log(`This is age 3 ${age3}`)


// arrow function with single argument and more than 1 line 
const yearUnitRetirement = (birthYear)=>{
    const age = 2025-birthYear;
    const retirementAge = 2037-age;
    return retirementAge;
}

const age4 = yearUnitRetirement(1995)
console.log(`This is your retirement date with single argument ${age4}`)



// arrow function with more than 1 argument and more than 1 line 
const yearUnitRetirement2 = (birthYear, firstName)=>{
    const age = 2025-birthYear;
    const retirementAge = 2037-age;

    return `${firstName} retires in ${retirementAge}`
}

console.log(yearUnitRetirement2(2000, 'Azad SIngh'))
console.log(yearUnitRetirement2(1996, 'Azad Pratap Singh'))


// function calling function
const cutIntoPieces = function (fruit){
    return fruit*4;
}

const fruitProcessor1 = function (apple, orange){
   const applePieces =  cutIntoPieces(apple)
   const orangePieces = cutIntoPieces(orange)
   const juice = `juice with ${applePieces} apple pieces and with ${orangePieces} orange pieces`
   return juice;
}

console.log(fruitProcessor1(4,6))




