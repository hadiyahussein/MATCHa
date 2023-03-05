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

            if (cnt < 4) {
                frontDiv.style.display = 'none';
                backDiv.style.display = 'block';
            } else {
                frontDiv.style.display = 'block';
                backDiv.style.display = 'none';
            }
        });
        console.log(cnt)
        cnt++;

        if (cnt === 5) {
            clearInterval(obj);
        }
    }

    // GAME STARTS, USER NEEDS TO CHOOSE CARDS
    let endOfTurn = false;
    let revealedCount = 0;
    let pairs = 0;
    let card1 = "";
    let card2 = "";
    let card1Img = '';
    let card2Img = '';


    //Play Again Button

    // create variable for .restart element 
    const restartButton = document.querySelector('.restart');

    // addEventListener on click 
    restartButton.addEventListener('click', () => {
      setTimeout(() => {
        console.log ('workingsrehbs')
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
                message.textContent = '';
                const frontDiv = card.querySelector('.front');
                const backDiv = card.querySelector('.back');
                frontDiv.style.display = 'none';
                backDiv.style.display = 'block';
                card.dataset.revealed = true;
                
                if (revealedCount === 0) {
                    // select card 1
                    card1 = card 
                    card1Img = card1.getAttribute('img');
                    revealedCount++;
                    console.log("The image source of card 1 is " +card1Img);
                    

                } else {
                    // select card 2
                    card2 = card
                    card2Img = card2.getAttribute('img');
                    revealedCount = 0;
                    console.log("The image source of card 2 is " + card2Img);
                    endOfTurn = true;
                    
                        // CONDITIONALS
                        if (card1Img == card2Img) {
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
                                // revealedCount = 0
                            message.textContent = 'That was not a match!';
                            revealedCount = 0;
                            endOfTurn = false;
                            card.dataset.revealed = false;
                          


                            setTimeout(() => {
                                card.querySelector('.front').style.display = 'block';
                                card.querySelector('.back').style.display = 'none';
                                card1.querySelector('.front').style.display = 'block';
                                card1.querySelector('.back').style.display = 'none';
                                card1.dataset.revealed = false;
                                card.dataset.revealed = false;
                            }, 4000);
                            
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

//FEATURE(**):
        // Attempt Counter - utilizing revealed count
        // Match counter: # / 6 pairs - utilizing cardPairs
        // Timer
        // 5 attempts allowed
        // rules appear after cards go facedown(initially)