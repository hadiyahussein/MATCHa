// Set up Firebase database, including initializing our database and our dbRef
import firebaseInfo from './firebase.js';
import {getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"

const database = getDatabase(firebaseInfo)
const dbRef = ref(database);
// const cardsRef = ref(database, '/cards');
const ulElement = document.querySelector('ul');

// get(cardsRef).then((data) => {
//     console.log(data.val())
// });

get(dbRef).then((snapshot) => {
    const data = snapshot.val();
    const cards = data.cards;
    
    const cardPickList = [...cards, ...cards];
    const shuffledArray = shuffleArray(cardPickList);
    cardPickList.forEach(function(card) {
        // Create li element and add .card class
        const liElement = document.createElement('li');
        liElement.classList.add('card');
        liElement.setAttribute('img', `${card.src}`);
        
        // Create div element and add .front class, append to li Element
        const frontDiv = document.createElement('div');
        frontDiv.classList.add('front');
        frontDiv.innerHTML = "testing testing"
        liElement.appendChild(frontDiv);

        // Create div element and add .back class, append to li Element
        const backDiv = document.createElement('div');
        backDiv.classList.add('back');
        backDiv.innerHTML = `<img src="${card.src}" alt="${card.alt}">`
        backDiv.setElement = ('image', `${card.src}`);
        liElement.appendChild(backDiv);
        // Append li element to ul element
        ulElement.appendChild(liElement);

    })
    const obj = setInterval(flipCards, 1000);
    let cnt = 0;
    function flipCards() {
        document.querySelectorAll('.card').forEach(card => {
            const frontDiv = card.querySelector('.front');
            const backDiv = card.querySelector('.back');

            if (cnt < 3) {
                frontDiv.style.display = 'none';
                backDiv.style.display = 'block';
            } else {
                frontDiv.style.display = 'block';
                backDiv.style.display = 'none';
            }
        });
        console.log(cnt)
        cnt++;

        if (cnt === 9) {
            clearInterval(obj);
        }
    }

    // GAME STARTS, USER NEEDS TO CHOOSE CARDS

    let endOfTurn = false;
    let revealedCount = 0;
    
    document.querySelectorAll('.card').forEach((card) => {
        card.addEventListener('click', (event) => {
            // if endOfTurn = false || revealed variabslale is equal to true, then return
            let card1 = "";
            let card2 = "";
            if (card.dataset.revealed === 'true' || endOfTurn === true) {
                return;
            }
            const frontDiv = card.querySelector('.front');
            const backDiv = card.querySelector('.back');
            frontDiv.style.display = 'none';
            backDiv.style.display = 'block';
            card.dataset.revealed = true;

            if (revealedCount === 0) {
                card1 = card.getAttribute('img');
                revealedCount++;
                console.group(card1);
                console.log(revealedCount);
            } else {
                card2 = card.getAttribute('img');
                revealedCount = 0;
                console.log(card2);
                endOfTurn = true;
            }
        });
    });
});






// Create function to shuffle the cardPickList array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


let counter = 0;
let firstSelection = "";
let secondSelection = "";
const pickArray = document.querySelectorAll('.card');
pickArray.forEach((card) => {
    pickArray.addEventListener('click', () => {
        card.classList.add('clicked');

        if (counter === 0) {
            firstSelection = card.getAttribute('img'); 
            counter++;
        } else {
            secondSelection = card.getAttribute('img');
            counter = 0;
        }

        console.log(firstSelection);
        console.log(secondSelection);        
    })
})

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