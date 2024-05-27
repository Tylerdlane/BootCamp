const casual = require('casual')
var country = casual.country;
var name = casual.name;
var city = casual.city;
var phone = casual.phone;
var address = casual.address;
var month = casual.month_name;

console.log(`Hello there ${name}!`)
console.log(`How was your trip to ${country}?`)
console.log(`Did you get to visit ${city}?`)
console.log(`I sure do hope you had a wonderful time.`)
console.log(`Is your phone number still ${phone}?`)
console.log(`I will try to give you a call sometime. By the way, I want to send you a fresh loaf of bread at your address of:`)
console.log(address)
console.log(`Well, I will see you soon. I will be visiting sometime before ${month}.`)
console.log(`Until then, farewell!`)
