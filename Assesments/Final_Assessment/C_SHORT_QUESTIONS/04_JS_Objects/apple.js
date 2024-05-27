// 1. Consider the following code.  Why is apple type reported incorrectly as "Clementine", where it is set to "Granny Smith"?

// var orange = apple/ is just a pass by refference to the apple object. We are not creating a new obj, So if we chnage orange it will also modify apple.  


// 1. What would you change to address this issue whereby the apple.type is reported as it was set originally i.e. "Granny Smith". In other words, how would you make a true copy of the apple object?

// See code below
    const apple = {
        type: 'Granny Smith',
        weight:  4
    }
// By assigning the var orange Object.create(apple) this will create a new copy of the apple obj called orange 
    var orange = Object.create(apple)
//This will now olny change the NEW orange object and not change the orignal apple obj
    orange.type = 'Clementine'

    //Testing both Apple and Orange type
    console.log('Apple type is ', apple.type)
    console.log('Orange type is ', orange.type)

