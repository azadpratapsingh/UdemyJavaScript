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
    },

    getSummary:function(){
        return `${this.firstName} is a ${this.calcAge()} -year old ${this.job} and he has ${this.hasDriverLicence ?'a':'no'} driver licence`
    }

    
}

console.log(jonas.calcAge())
console.log(jonas.getSummary())