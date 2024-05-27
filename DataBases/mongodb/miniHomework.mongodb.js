use('Tyler')

// db.Students.insertOne({
//     //Key Vaule Pairs Go Here
//     "name": "AJ",
//     "age": 22,
//     "email": "ajmail@gmail.com"
// })


// db.Students.insertOne({
//     "name": "Robbie",
//     "age": 32,
//     "email": "robertmail@gmail.com"
// })

// db.Students.insertMany([
//     {
//         "name": "Alex",
//         "age": 24,
//     },
//     {
//         "name": "Alex",
//         "age": 19,
//     },
//     {
//         "name": "Alex",
//         "age": 22,
//     },
//     {
//         "name": "Troy",
//         "age": 32,
//     },
//     {
//         "name": "Troy",
//         "age": 47,
//     },
//     {
//         "name": "Troy",
//         "age": 50,
//     },
//     {
//         "name": "April",
//         "age": 73,
//     },
//     {
//         "name": "April",
//         "age": 65,
//     },
//     {
//         "name": "April",
//         "age": 84,
//     }
// ])

//Mini Homework

//Read -- Find student by name 'April'
// db.Students.find({name: "April"});

//Read -- Find students with age less than 60
// db.Students.find({age: {$lt: 60}});

//Read -- Find students with an age greater than 25
// db.Students.find({age: {$gt: 25}});

//Read -- Find students with an age greater than 25 and less than 60
// db.Students.find({age: {$lt:60, $gt:25}});

//Read -- Find all students with the name Troy and April
// db.Students.find({name: {$in: ['Troy', 'April']}});
