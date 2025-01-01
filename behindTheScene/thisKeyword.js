console.log(this)

const calcAge=function(birthyear){
    console.log(2037 -birthyear )
    console.log(this)
}

calcAge(1991)


const calcAgeArrow=(birthyear)=>{
    console.log(2037 -birthyear )
    console.log(this)
}

calcAgeArrow(1993) 