// // index.js
// const harryPotterSpells = require('harry-potter-spells');

// // Get a random spell
// const randomSpell = harryPotterSpells.random();
// console.log('Random Spell:', randomSpell);

// // Get all spells
// const allSpells = harryPotterSpells.all;
// console.log('All Spells:', allSpells);

// // Get a specific spell by name
// const specificSpell = harryPotterSpells.spell('Expelliarmus');
// console.log('Specific Spell:', specificSpell);

// index.js
const harryPotterSpells = require('harry-potter-spells');

// Function to determine the winner based on ASCII value of the first letter
function determineWinner(spell1, spell2) {
  const charCode1 = spell1.name.charCodeAt(0);
  const charCode2 = spell2.name.charCodeAt(0);

  if (charCode1 > charCode2) {
    return spell1.name + ' wins!';
  } else if (charCode1 < charCode2) {
    return spell2.name + ' wins!';
  } else {
    return 'It\'s a tie!';
  }
}

// Get two random spells
const spell1 = harryPotterSpells.random();
const spell2 = harryPotterSpells.random();

// Display information about the spells
console.log('Spell 1:', spell1);
console.log('Spell 2:', spell2);

// Determine the winner of the magical duel
const winner = determineWinner(spell1, spell2);
console.log('Winner:', winner);