// 30 minutes max

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function chall_one(arr){
    for(var obj in students){
        console.log('Name: '+students[obj].name+', Cohort: '+students[obj].cohort)
    }
}

chall_one(students)

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


function chall_two(object){
    for(var arr in users){
        console.log(arr.toUpperCase());
        for(var obj in users[arr]){
            var first = users[arr][obj].first_name.length
            var last = users[arr][obj].last_name.length
            // console.log('first equals: '+first)
            // console.log('lasst equals: '+last)
            console.log(Number(obj)+1+' - '+users[arr][obj].last_name.toUpperCase()+', '+users[arr][obj].first_name.toUpperCase()+' - '+(first+last));
        }
    }
}


chall_two(users)