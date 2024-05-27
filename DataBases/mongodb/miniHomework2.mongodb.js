// Tells what Db to use
use('Tyler');
// Create -- Create multiple Docs with multiple key: values
db.Students.insertMany([
    {
        name: "Mary",
        age: 27,
        grade: 7
    },
    {
        name: "Kevin",
        age: 34,
        grade: 5
    },
    {
        name: "Vincent",
        age: 18,
        grade: 12
    },
    {
        name: "Jack",
        age: 40,
        grade: 9
    }
])

// Update -- Updating just a single doc changing the age
db.Students.updateOne({ name: "Mary" }, { $set: { age: 36 } });
// Update -- Updating just a single doc changing the age and grade
db.Students.updateOne({ name: "Kevin" }, { $set: { age: 54, grade: 11 } });
// Update -- Updating just a single doc increasing the age by 9
db.Students.updateOne({ name: "Vincent" }, { $inc: { age: 9} });
// Update -- Updating just a single doc changing the value of name
db.Students.updateOne({name: "Jack"}, {$set: {name: "Jackson"}})
// Update -- Updating a doc, but  if doc is not found it will create a new doc
db.Students.findAndModify({query:{name: "Randy"}, update:{$set:{age: 12, grade: 7 }}, upsert: true})

db.Students.insertMany([
    {
        name: "Tony",
        age: 24,
        score: 70
    },
    {
        name: "Cassie",
        age: 67,
        score: 89
    },
    {
        name: "Amanda",
        age: 33,
        score: 91
    },
    {
        name: "Julian",
        age: 17,
        score: 70
    },
    {
        name: "Carter",
        age: 22,
        score: 72
    }
])
// Delete -- Delete a single or multiple docs
db.Students.deleteOne({name: "Julian"})
db.Students.deleteMany({score: {$lt:91}})

db.Students.insertMany([
    {
        name: "Charlie",
        age: 24,
        score: 76,
        grade: "C"
    },
    {
        name: "Dave",
        age: 67,
        score: 32,
        grade: "F"
    },
    {
        name: "Grace",
        age: 17,
        score: 87,
        grade: "B"
    },
    {
        name: "Frank",
        age: 22,
        score: 35,
        grade: "F"
    }
])

db.Students.updateOne({name: "Amanda"}, {$set:{grade: "A"}})
db.Students.deleteOne({grade: "C"})
db.Students.deleteMany({grade: "F"})


