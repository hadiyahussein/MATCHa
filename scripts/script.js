// TODO: 
    // Fix conditionals for matches or non-matches. Currently card1 === card2 is not working.

    
    // Set up Firebase database, including initializing our database and our dbRef
    import firebaseInfo from './firebase.js';
    import {getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"
    
    const database = getDatabase(firebaseInfo)
    const dbRef = ref(database);

// Use document.querySelector() to get JS objects:
    // create variable for div with class of cardsContainer
    const ulElement = document.querySelector('ul');
    // create variable for div with message updates
    const message = document.querySelector('.message');
    
    // create variable for revealed key value
    get(dbRef).then((snapshot) => {
    const data = snapshot.val();
    // create variable for cardList - the values of the array
    const cards = data.cards;
    
    // create variable for cardPickList - [...cardList, ...cardList]
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
    // let user preview cards at start of game for a few seconds
    const obj = setInterval(flipCards, 1000);
    let cnt = 0;
    function flipCards() {
        document.querySelectorAll('.card').forEach(card => {
            const frontDiv = card.querySelector('.front');
            const backDiv = card.querySelector('.back');

            if (cnt < 8) {
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
    let pairs = 0;

// addEventListener to .card div - when clicked 
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
            // Stop user from clicking revealed cards. if endOfTurn = true || is revealed
            let card1 = "";
            let card2 = "";
            if (card.dataset.revealed === 'true' || endOfTurn === true) {
                return;
            }
            message.textContent = '';
            const frontDiv = card.querySelector('.front');
            const backDiv = card.querySelector('.back');
            frontDiv.style.display = 'none';
            backDiv.style.display = 'block';
            card.dataset.revealed = true;
            
            if (revealedCount === 0) {
                // select card 1
                card1 = card.getAttribute('img');
                revealedCount++;
                console.log('this is card1' + card1);

            } else {
                // select card 2
                card2 = card.getAttribute('img');
                revealedCount = 0;
                console.log('this is card2' + card2);
                endOfTurn = true;
                
                    // CONDITIONALS
                    if (card1 === card2) {
                        // if cards1 and card2 match
                        // make .message div = it matched! for 3s
                        // clear .message div
                        // increase # of match pairs found **
                        // cards remain faced up
                        // set card 1 and 2 - variable revealed key value = true
                        // decrease cardCount by 2
                        // cardPairs += 1
                        // revealedCount = 0
                        message.textContent = 'That was a match!';
                        pairs++;
                        revealedCount = 0;
                        endOfTurn = false;
                        if (pairs === 6){
                            // if cardPairs === 6
                            // make .message div = YOU WIN! Refresh to play again
                            message.textContent = 'YOU WIN! Refresh to play again.'
                        }
                        
                    } else {
                        // if card1 and card2 don't match
                            // make .message div = cards do not match for 3s
                            // clear .message div
                            // increment the number of attempts made **
                            // cards go faced down 
                            // revealedCount = 0
                        message.textContent = 'That was not a match!';
                        revealedCount = 0;
                        endOfTurn = false;
                        card.dataset.revealed = false;
                        
                    }
            } return;
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