function findYoungestPerson(ppl){
    var youngest = ppl[0].firstname +' '+ ppl[0].lastname;
    for (var person = 0; person < ppl.length-1; person++){
        if(ppl[person].age < ppl[person+1].age) {
            youngest = ppl[person].firstname +' '+ ppl[person].lastname;
        }
    }
    return 'The youngest person is '+ youngest;
}
findYoungestPerson([
        { firstname : 'George', lastname: 'Kolev', age: 32},
        { firstname : 'Bay', lastname: 'Ivan', age: 81},
        { firstname : 'Baba', lastname: 'Ginka', age: 40}]
);