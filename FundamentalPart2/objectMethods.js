const jonas={
    firstName:'Azad',
    lastName:'Singh',
    birthYeah:2000,
    job:'Student',
    firends:['Rahul','Anoop','Sanjay'],
    hasDriverLicence:true,
    calcAge:function(){
        console.log(this)
        return 2037-this.birthYeah
    }
}

console.log(jonas.calcAge())