
// let maxNum = parseInt(prompt(`Enter a maximum number:`));
// while (!maxNum) {
//     maxNum = parseInt(prompt(`Enter a valid number`));
// }
// const targetNum = Math.floor(Math.random() * maxNum) + 1;

// let guess = parseInt(prompt(`Take a guess:`));
// let attempt = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === `q`) break;
//     attempt++;
//     if (guess > targetNum) {
//         guess = prompt(`Too high! Try again:`);
//     }
//     else {
//         guess = prompt(`Too low! Try again:`);
//     }
// }

// if (guess === `q`) {
//     console.log(`You quit the game.`)
// }
// else {
//     console.log(`Congrats!, you got it right. The correct answer was ${targetNum}. It took you ${attempt} guesses`)
// }

///////////////
const listOf = []
let query = prompt(`What would you like to do?`).toLowerCase();
while (query !== `quit`) {
    if (query === `quit`) {
        break;
    }
    if (query === `new`) {
        let addTask = prompt(`New task to list:`).toUpperCase();
        listOf.push(addTask)
        console.log(`${addTask} has been added to the to-do list.`)
    }
    if (query === `list`) {
        console.log(`*********************`)
        for (let i = 0; i < listOf.length; i++) {
            console.log(`${i}: ${listOf[i]}`)
        }
        console.log(`*********************`)
    }
    if (query === `delete`) {
        let deleteItem = parseInt(prompt(`Which task number do you want deleted?`))
        listOf.splice(deleteItem, 1);
        console.log(`Task #${deleteItem} has been deleted from the to-do list.`)
    }
    query = prompt(`What would you like to do? `).toLowerCase();
}