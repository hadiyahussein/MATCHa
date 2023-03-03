// Set up Firebase database, including initializing our database and our dbRef
import firebaseInfo from './firebase.js';
import {getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"

const database = getDatabase(firebaseInfo)
const dbRef = ref(database);
const cardsRef = ref(database, 'cards');
const ulElement = document.querySelector('ul');

get(dbRef).then((snapshot) => {
    const data = snapshot.val();
    const cards = data.cards;

    const cardPickList = [...cards, ...cards];
    const shuffledArray = shuffleArray(cardPickList);
    
    cardPickList.forEach(function(card) {
        // Create li element and add .card class
        const liElement = document.createElement('li');
        liElement.classList.add('card');
        console.log(liElement);
        
        // Create div element and add .front class, append to li Element
        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        frontDiv.innerHTML = "testing testing"
        console.log(frontDiv);
        liElement.appendChild(frontDiv);

        // Create div element and add .back class, append to li Element
        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.innerHTML = `<img src="${card.src}" alt="${card.alt}">`
        liElement.appendChild(backDiv);

        // Append li element to ul element
        ulElement.appendChild(liElement);

    })
});


// Create function to shuffle the cardPickList array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}




// Add SDKs for Firebase products that we will use 
// Use document.querySelector() to get JS objects:
    // create variable for div with class of cardsContainer
    // const cardsContainer= document.getElementsByClassName(cardsContainer)
    // // create variable for cardList - the values of the array
    // // create variable for cardPickList - [...cardList, ...cardList]
    
    
    // create variable for cardCount - cardPickList.length

    // create variable for revealed key value


    // let revealedCount = 0; (cards being chosen (i.e., card 1, card2)
    // let endOfTurn = false;
    // let cardPairs = 0; (overall pairs found count)



//USER PREVIEWS CARDS AT START OF GAME
// toggle div with .front to .back so user can preview cards for 10s
    // toggle div class back to front


// GAME STARTS, USER NEEDS TO CHOOSE CARDS
// CHOOSE CARD 1
    // addEventListener to .card div - when clicked 
        // Stop user from clicking revealed cards. if endOfTurn = false || revealed variable is equal to true, then return
        // toggle div class from .front to .back
            // make a variable for .card1 value
            // change style to display: block. 
        // revealedCount = 1

// CHOOSE CARD 2
    // addEventListener to .card div - when clicked
        // if endOfTurn = false || revealed variabslale is equal to true, then return
        // toggle div from .front to .back
            // make variable for .card2 value
            // change style to display: block
        // revealedCount = 2
        // endOfTurn = true

    // CONDITIONALS
    // if card1 and card2 don't match
        // make .message div = cards do not match for 3s
        // clear .message div
        // increment the number of attempts made **
        // cards go faced down 
        // revealedCount = 0

    // if cards1 and card2 match
        // make .message div = it matched! for 3s
        // clear .message div
        // increase # of match pairs found **
        // cards remain faced up
        // set card 1 and 2 - variable revealed key value = true
        // decrease cardCount by 2
        // cardPairs += 1
        // revealedCount = 0
    // if cardPairs === 6
        // make .message div = YOU WIN! Refresh to play again.
        
        
//Play Again Button
// create variable for .restart element 
// addEventListener on click
// use window.location.reload() after 3s. 

//FEATURE(**):
        // Attempt Counter - utilizing revealed count
        // Match counter: # / 6 pairs - utilizing cardPairs
        // Timer
        // 5 attempts allowed
        // rules appear after cards go facedown(initially)