
    // Create two classes, one called Cat and another called Dog. Both classes should be created using constructor syntax. The Cat class should be created using a named declaration and the Dog class should be created using an anonymous declaration.
    // Create a new instance of the Cat class. Directly underneath, create a new instance of the Dog class.
    // Create a new class using constructor syntax called Animal. Create a method within the Animal class that when called, displays the message “The Animal has been created” in the console window.
    // Now, replicate the above code but this time so that the class accepts an argument and that value is what is displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.
    // Start over and now create a new class using constructor syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set within the object so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation.
    // Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
    // Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
    // Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a privileged method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
    // Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.
// STEP 1

// class Cat {
//     constructor() {

//     }
// }

// class Dog {
//     constructor() {

//     }
// }

// STEP 2

// const remy = new Cat()
// const brumby = new Dog()

// STEP 3

// class Animal {
//     constructor() {
//         this.create = function() {
//             console.log(`The animal has been created.`)
//         }
//     }
// }

// STEP 4

// class Animal {
//     constructor(whichAnimal) {
//         this.create = function() {
//             console.log(`The ${whichAnimal} animal has been created.`)
//         }
//     }
// }

// STEP 5

// class Animal {
//     constructor(name, type, breed, color, height, length) {
//         this.name = name
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//         this.create = function() {
//             console.log(`${this.name} the ${this.color} ${this.type} animal has been created.`)
//         }
//     }
// }
// 
// anna.create()

// STEP 6

// class Animal {
//     constructor(name, type, breed, color, height, length) {
//         this.name = name
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//         this.create = function() {
//             console.log(`${this.name} the ${this.color} ${this.type} animal has been created.`)
//         }
//     }
// }
// function showProps(obj, objName) {
//     let result = ''
//     for (const prop in obj) {
//         result += `${objName}.${prop} = ${obj[prop]}\n`
//     }
//     console.log(result)
// }
// const anna = new Animal('Anna', 'cat', 'bengal', 'orange', 'medium', 'long-ish')
// showProps(anna, 'anna')

// STEP 7

// class Animal {
//     constructor(name, type, breed, color, height, length) {
//         this.name = name
//         this.type = type
//         this.breed = breed
//         this.color = color
//         this.height = height
//         this.length = length
//         this.create = function() {
//             console.log(`${this.name} the ${this.color} ${this.type} animal has been created.`)
//         }
//         this.speak = function() {
//             switch (this.type) {
//                 case 'cat':
//                     console.log(`The ${color} cat is meowing.`)
//                     break;
//                 case 'dog':
//                     console.log(`The ${color} dog es borking.`)
//                     break;
//                 default:
//                     console.log('ya messed up the switch.')
//                     break;
//             }
//         }
//     }
// }
// const anna = new Animal('Anna', 'cat', 'bengal', 'orange', 'medium', 'long-ish')
// const gatsby = new Animal('Gatsby', 'dog', 'pomeranian', 'black', 'short', 'small')
// anna.speak()
// gatsby.speak()

// STEP 8

// class Animal {
//     constructor(name, type, breed, color, height, length) {
//         name = name
//         let type = type
//         let breed = breed
//         let color = color
//         let height = height
//         let length = length
//         #checkType = function(type) {
//             if (type == 'dog') {
//                 return 'dog'
//             } else {
//                 return 'cat'
//             }
//         }
//         this.speak = function() {
//             console.log(`The ${checkType()} has made a noise!`)
//         }       
//     }
// }
// const anna = new Animal('Anna', 'cat', 'bengal', 'orange', 'medium', 'long-ish')
// anna.speak()

// STEP 9

// const Doug = 'The dolphins had long known of the impending demolition of Earth and had made many attempts to alert mankind to the danger...The last ever dolphins message was misinterpreted as a surprisingly sophisticated attempt to do a double backward somersault through a hoop whilst whistling \"The Star-Spangled Banner\", but in fact the message was this: \"So Long, and Thanks for All the Fish.\"'

// const word = 'dolphins'

// let pattern = new RegExp(word) 
// pattern = pattern + 'g'
// String.prototype.findWords = function(paragraph, countThisWord) {
//     paragraph.match(/[countThisWord]/g)
// }

// console.log(Doug.findWords(Doug, word))
// console.log(pattern)
// console.log(Doug.matchAll(word))


// I know this is not great work, but I am super burned out from work. Sorry for the weak finish.
