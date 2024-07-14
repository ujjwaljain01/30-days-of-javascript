function toVote(age,voterId) {
    if(age>=18 && voterId==="Yes"){
        return "eligble"
    }
    else if(age>=18 || voterId==="Yes"){
        return "one req not met"
    }
    else if(!(age>=18)){
        return "age should be atleast 18"
    }
}
console.log(toVote(17,"No"));