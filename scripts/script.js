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
    // create variable for div with pairsMatched card
    const pairsMatched = document.querySelector('.pairsMatched');
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
            frontDiv.innerHTML = `<img src="./assets/front.jpg" alt="">`;
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
                
                if (cnt < 3) {
                    frontDiv.style.display = 'none';
                    backDiv.style.display = 'block';
                    // backDiv.style.transform = 'scaleX(-1)'
                } else {
                    frontDiv.style.display = 'block';
                    backDiv.style.display = 'none';
                }
            });
            cnt++;
            
            if (cnt === 4) {
                clearInterval(obj);
            }
        }
        
        // GAME STARTS, USER NEEDS TO CHOOSE CARDS
        let endOfTurn = false;
        let revealedCount = 0;
        let pairs = 0;
        let attemptsMade = 0;
        let card1 = "";
        let card2 = "";
        let card1Img = '';
        let card2Img = '';


    
        // create variable for .restart element 
        const restartButton = document.querySelector('.restart');
        
        // addEventListener on click 
        restartButton.addEventListener('click', () => {
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
        
        // addEventListener to .card div - when clicked 
        document.querySelectorAll('.card').forEach((card) => {
            card.addEventListener('click', (event) => {
                // Stop user from clicking revealed cards. if endOfTurn = true || is revealed
                
                if (card.dataset.revealed === 'true' || endOfTurn === true) {
                    return;
                }
                card.classList.toggle('flip');
                message.textContent = '';
                const frontDiv = card.querySelector('.front');
                const backDiv = card.querySelector('.back');

                delay(600).then(() => {frontDiv.style.display = 'none';
                backDiv.style.display = 'block';
                backDiv.style.transform = 'scaleX(-1)'
                card.dataset.revealed = true;
                });
                
                if (revealedCount === 0) {
                    // select card 1
                    card1 = card 
                    card1Img = card1.getAttribute('img');
                    revealedCount++;
                 

                } else {
                    // select card 2
                    card2 = card
                    card2Img = card2.getAttribute('img');
                    revealedCount = 0;
                    endOfTurn = true;
            
                
                    // CONDITIONALS
                
                if (card1Img == card2Img) {
                    // if cards1 and card2 match
                    message.textContent = 'That was a MATCHa!';
                    pairs++;
                    revealedCount = 0;
                    endOfTurn = false;
                    pairsMatched.innerHTML = `<p>Matched: ${pairs}/6</p>`;

                    if (pairs === 6){
                        // if cardPairs === 6
                        // make .message div = YOU WIN! Refresh to play again
                        message.innerHTML = `<h3>YOU WIN!</h3><p>Refresh to play again</p>`;
                    }
                                
                } else {
                    
                    // if card1 and card2 don't match
                    const userAttempts = document.querySelector('.userAttempts')
                    message.textContent = 'That was not a MATCHa!';

                    // flip non-match cards 
                    setTimeout(() => {
                        card.querySelector('.front').style.display = 'block';
                        card.querySelector('.back').style.display = 'none';
                        card1.querySelector('.front').style.display = 'block';
                        card1.querySelector('.back').style.display = 'none';
                        card1.dataset.revealed = false;
                        card.dataset.revealed = false;
                        card1.classList.toggle('flip');
                        card2.classList.toggle('flip');
                        
                        endOfTurn = false; 
                        card.dataset.revealed = false;
                        revealedCount = 0;
                    }, 2500);

                    attemptsMade ++;
                    userAttempts.innerHTML = `<p>Attempts: ${attemptsMade}/6</p>`;
                   

                    // If 6 non-match attempts were made, user loses game
                    if (attemptsMade >= 6) {
                        message.innerHTML = `<h3>YOU LOSE!</h3><p>Refresh to play again</p>`;
                        
                    }
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


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}



//FEATURE(**):
        // Attempt Counter - utilizing revealed count
        // Match counter: # / 6 pairs - utilizing cardPairs
        // Timer
        // 5 attempts allowed
        // rules appear after cards go facedown(initially)