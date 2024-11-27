const jonas={
    firstName:'azad',
    lastName:'Singh',
    age:2024-1996,
    job: 'teacher',
    friends:['mohan','sohan','rohan']
}

console.log(jonas)
console.log(`This is first name ${jonas.firstName}`)
console.log(`This is last name ${jonas["lastName"]}`)

const nameKey = "Name"

console.log('this is first name: ', jonas['first'+nameKey])
console.log('this is first name: ', jonas['last'+nameKey])

const interestedIn = prompt("what do you want to know about jonas? Choose out of firstName, lastName, age, job, and  friends")

if(jonas[interestedIn]){
    console.log(jonas[interestedIn])
}else{
    console.log("Wroong request! please enter  out of firstName, lastName, age, job and friends")
}

jonas.location='Gurugram'
jonas['twitter']='iamcoolazad@gmail.com'
console.log(jonas)