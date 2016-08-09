db.students.insert({name: "MY NAME"})
db.students.insert({name: "Alan Turing", age: 103})
db.students.insert({name: "Dennis Ritchie", age: 74})
db.students.insert({name:"Caitlin Sweeney", age: 31})
db.students.insert({name: "Jack Sweeney", age:24})
db.students.insert({name: "Rebecca Harrigan", age: 31})
db.students.insert({name:"Brendan Devlin", age: 32});

db.students.update({name: "Caitlin Sweeney"}, { $set: { name: "Cait" } })

// Find all of the students in the collection: db.students.find()
// Remove yourself from the students collection: db.students.remove({name : "your name"})
// Remove all of the students from the students collection: db.students.remove({})
// Execute db.students.find() find to confirm that all students have now been removed.

// Create a zoo database with a collection of animals and visitors. Each animal should have a name ("elephant") and a diet ("herbivore"). Each visitor should have a name ("Marcos") and a favorite animal ("Lion"). Insert some sample animals and visitors.

db.animals.insert({name: "elephant", diet: "herbivore"})
db.animals.insert({name: "lion", diet: "carnivore"})
db.animals.insert({name: "zebra", diet: "herbivore"})
db.animals.insert({name: "otter", diet: "omnivore"})
db.animals.insert({name: "penguin", diet: "carnivore"})

db.visitors.insert({name: "connor", favorite: "lion"})
db.visitors.insert({name: "julie", favorite: "zebra"})
db.visitors.insert({name: "danielle", favorite: "elephant"})
db.visitors.insert({name: "patrick", favorite: "otter"})
db.visitors.insert({name: "jack", favorite: "penguin"})

// Execute a query that finds all users with a given favorite animal.

db.visitors.find({favorite: "lion" }).pretty()

// Execute a query that changes a given visitor's favorite animal.

db.visitors.update({favorite: "lion" }, { $set: { favorite: "monkey"} })

// Modify your visitors so that they have an array of favorite animals instead of a single animal. After the arrays are created, use the $push operator to add an animal to the visitor's favorites.

db.visitors.insert({name: "connor", favorite: ["lion", "bear", "tigers"] })
db.visitors.insert({name: "julie", favorite: ["zebra", "horse", "camel"] })
db.visitors.insert({name: "danielle", favorite: ["elephant", "rhino", "hippo"] })
db.visitors.insert({name: "patrick", favorite: ["otter", "dog", "seal"] })
db.visitors.insert({name: "jack", favorite: ["penguin", "polar bear", "walrus"] })

db.visitors.update({name: "connor" } , { $set: {favorite: ["monkey"]} })

db.visitors.update({name: "connor" } , { $push: {favorite: ["lion", "bear", "tigers"]}  })

// Bonus
// Add the countries from the Countries.json sample data to a Mongo collection. Use the mongoimport command, described in the documentation and demonstrated in this example. After importing successfully, confirm that you can make the following queries:

// findOne country that matches a given name.
// find countries that contain part of a string in their name.
// find countries whose names begin with 'Z'.
// sort countries by name in reverse alphabetical order.
// $ Success! Now you know how to create and manipulate a MongoDB database from the Mongo shell!
