// Set up Firebase database, including initializing our database and our dbRef
// Add SDKs for Firebase products that we will use 
// Use document.querySelector() to get JS objects:
    // create variable for div with class of cardsContainer
    // create variable for cardList - the values of the array
    // create variable for cardPickList - [...cardList, ...cardList]
    // create variable for cardCount - cardPickList.length
    // create variable for revealed key value
    // let revealedCount = 0; (cards being chosen (i.e., card 1, card2)
    // let endOfTurn = false;
    // let cardPairs = 0; (overall pairs found count)


// BUILD CARDS
// Create for loop to create the DOM
    // create variable for randomizer for index selection
    // create variable for randomIndex - cardPickList[randomizer];
    // create variable for div with card class

    // use splice method to ensure only 2 of each are selected during randomizer

// CREATE CARDS
    // create div for the card
        // use classList.add to add "card" class
    // create div for front of card (faceDown) and make a variable
        // use classList.add to add "front" class
            // use innerHTML to add img
            // append it to the div.front
    // append div.front to div.card
    // create div class for back of card (faceUp) and make a variable
        // use classList.add to add "back" class
            // use innerHTML to add img
            // append it to the div.back
    // append div.back to div.card


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
        // if endOfTurn = false || revealed variable is equal to true, then return
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




// Set up Firebase database, including initializing our database and our dbRef
// Add SDKs for Firebase products that we will use 
// Use document.querySelector() to get JS objects:
    // create variable for div with class of cardsContainer
    // create variable for cardList - the values of the array
    // create variable for cardPickList - [...cardList, ...cardList]
    // create variable for cardCount - cardPickList.length
    // create variable for revealed key value
    // create variable for revealedCount = 0; (cards being chosen (i.e., card 1, card2)
    // create variable for cardPairs = 0; (overall pairs found count)


// BUILD CARDS
// Create for loop to create the DOM
    // create variable for randomizer for index selection
    // create variable for randomCard - cardPickList[randomizer];
    // create variable for div with card class

    // use splice method to ensure only 2 of each are selected during randomizer

    // create div for the card
        // use classList.add to add "card" class

        // create div for front of card (faceDown) and make a variable
            // use classList.add to add "front" class
                // use innerHTML to add img
                // append it to the div.front
        // append div.front to div.card
        // create div class for back of card (faceUp) and make a variable
            // use classList.add to add "back" class
                // use innerHTML to add img
                // append it to the div.back
        // append div.back to div.card


//USER PREVIEWS CARDS AT START OF GAME
// toggle div with .front to .back so user can preview cards for 10s
    // toggle div class back to front

    

// GAME STARTS, USER NEEDS TO CHOOSE CARDS
// CHOOSE CARD 1
    // addEventListener to .card div for click.
        // Prevent user from clicking already revealed cards.
        // toggle div class from .front to .back
        // change revealed value to true
        // change style to display: block so display:none styling is removed
            // make a variable for .card1's value
        // Update revealedCount to 1

// CHOOSE CARD 2
    // addEventListener to .card div for click
        // Prevent user from clicking already revealed cards.
        // toggle div class from .front to .back
        // change revealed value to true
        // change style to display: block
            // make variable for .card2 value
        // Update revealedCount to 2
        // Update endOfTurn to 2


    // CONDITIONALS
    // if card1 and card2 don't match
        // Make a message appear saying "Cards do not match!" and remove message after 3 seconds
        // toggle div class from .back to .front
        // Updated revealedCount to 0
        // Change revealed values for card1 and card2 to false
        // Create variable for attempts made
            // Increment the number of attempts made
            // Make a message appear saying "Attempt is now attempts.val" and remove message after 3 seconds
            // Add a filled in heart to attempt counter


    // if cards1 and card2 match
        // Make a message appear saying "Cards match!" and remove message after 3 seconds
        // Cards remain faced up
        // Decrease the card count by 2 using '-='
        // Increase the cardPairs by 1 using '+='
        // Update reavealedCount back to 0
    // if cardPairs === 6
        // Make a message appear saying "You win! Click refresh to play again!"
        
        
//Play Again Button
// create variable for .restart element 
// addEventListener on click
// use window.location.reload() after 3s. 

//FEATURE(**):
        // pop ups for "YOU WIN!", "YOU LOSE!", "INFO"
        // Match counter: # / 6 pairs - utilizing cardPairs
        // Timer
        // Info button