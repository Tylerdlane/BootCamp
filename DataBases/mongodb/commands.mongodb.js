// 1. make sure your on main - and have the latest changes git pull
// 2. git checkout -b nameOfBranch
// 3. do your work add commit push as usual
// 4. Once you finish your work - you open a pull request
// 5. you merge your code to main

// Which db to use
// use("tl_test"); //Playground
// use tl_test


// db.getMongo().getDBs();
// Create a collection
db.createCollection("people")


// Create a single document
db.people.insertOne({ name: "Tyler", last: "Lane", age:29 });.;';'[]

db.people.insertOne({ name: "Adrian", last: "Hernandez", age: 22 })

db.people.insertOne({ name: "Jaspreet", age: 90 });

// Create multiple docmuents
db.people.insertMany([
    { name: "Brittney", age: 30},
    { name: "Piyush", age: 59 }
]);


// Read -- Give all documents back
db.people.find({ });

// Read -- Find by name
db.people.find({name: "Tyler"});
// Read -- Find by age
db.people.find({age: 22});
// Read -- Find all people less than 39 year old
db.people.find({ age: { $lt: 39 } });
// Read -- Find all people greater than or equal to 39 years old
db.people.find({ age: { $gte: 39 } });
// Read -- Find documents containing the following names
db.people.find({name: {$in: ["Tyler", "Brittney"]}});
// Read -- Find documents containing the following names, but exclude age
db.people.find({name: {$in: ["Tyler", "Brittney"]}}, { age: 0});


db.people.find({}, { age: 0, _id: 0});
// Sort by ascending / descending
db.people.find({}).sort({age: 1});
db.people.find({}).sort({age: -1});
db.people.find({}).sort({ name: 1});
db.people.find({}).sort({ name: -1});

//Read -- Concat First and lat name as full name
db.people.find({},{"fullname": { $concat: ["$name", " ", "$last"]}});
// Read -- Last and first name ONLY if last field is true
db.people.find({ "last": { $exists: true} }, {"fullname": {$concat: ["$name", " ", "$last"]}});

//Clear terminal screen 
cls

//Update -- updateOne()/ updateMany()
//Update -- update single Doc
db.people.updateOne({ name: "Jaspreet"}, {$set: { age : 36}});
//Update -- update single Doc where the field does not currently exist
db.people.updateOne({ name: "Jaspreet"}, {$set: { occupation: "Mentor"}});

//Update -- update single Doc 
db.people.updateOne({ name: "Jaspreet"}, {$unset: { occupation: "Mentor"}});

//Update -- increase age by one 
db.people.updateOne({ name: "Tyler"}, {$inc: {age: 1 }});

//Update -- Multiple Docs
db.people.updateMany({}, { $inc: { age: 1 } });

db.people.updateOne({name: "Tyler"}, { $set: {favNum: 13}});

db.people.updateOne({ name: "Tyler"}, { $mul: { favNum: 7}});

//DELETE -- Delete a single doc
db.people.deleteOne({name: "Brittney"});

//Delete -- Delete multiple docs
db.people.deleteMany({ age: { $lt: 40 } });








