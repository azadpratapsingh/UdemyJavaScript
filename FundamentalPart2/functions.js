// calling / running/ invoking the function
logger()
function logger(){
    console.log("Hi I  am there")
}



function fruitProcessor(apple, orange){
    console.log(apple, orange)
    const juice = `apple juice of ${apple} and orange juice of ${orange}`
    return juice
}

const juice = fruitProcessor(5,7)
console.log(juice)


const num = Number('34')
