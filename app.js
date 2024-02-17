
//STEP ONE //declare a variable named COLORS and store an array of five colors twice over
const COLORS = [   
    "red",
    "blue",
    "green",
    "pink",
    "purple",
    "orange",
    "yellow",
    "red",
    "blue",
    "green",
    "pink",
    "purple",
    "orange",
    "yellow"
  ];
  
    
  
  //STEP TWO
  //Create a function that will shuffle the array and return a shuffled array. That value will be placed in the next function.
  function shuffle(array) {      //Declare a function. Name it shuffle. Give it the property of array.
    let counter = array.length;  //Declare local variable. Name it counter. Store the value of the length of the arrays
  
    while (counter > 0) {                     //Declare while loop. Set it to run while counter is great then 0
                                              
      let index = Math.floor(Math.random() * counter); //declare a variable. Name it index. have the counter generate a random number found within the counter and then floor it
  
      
      counter--;  // Decrease counter by 1 every time through the loop //Need to do this to ensure we stay in the array
  
      // And swap the last element with it
      let temp = array[counter];  //Declare a varible. Name it temporary. Store the value of temparay equals the array minus 1
      array[counter] = array[index]; //set the array minus 1 equal to the random number of the counter
      array[index] = temp; //set the random equal to the variable temp.
    }
  
    return array; //return the array now in a random order
  }
  
  let shuffledColors = shuffle(COLORS); //Declare a variable. Name it shuffledColors. Store the value of the above funtion and give that function the property of COLORS
  
  const gameContainer = document.getElementById("game"); //Declare a variable. Name it. Find and store the id='game'
  let card1 = null; //Declare a variable. Name it. Store the intentional value of nothing
  let card2 = null; //Delcare another variable. Name it. Store intentional the value of nothing
  let cardsFlipped = 0; //Declare a variable. Name it flipCard. Store the value of 0
  
  //STEP 3
  function createDivsForColors(colorArray) {  //Declare a function to create the divs for colors (createDivsForColors). Set a property
    for (let color of colorArray) {            //Declare a for.of loop. let color of function property
      const newDiv = document.createElement("div"); //declare a variable to create a new div element
      newDiv.classList.add(color);                  //Create a new class of color to the new div element
      newDiv.addEventListener("click", handleCardClick); //add an event listenter to the new div. listen for a click. send listener to next function
      gameContainer.append(newDiv); //add (append()) new div to original div
    }
  }
  
  let noClicking = false; //Declare a variable. Name it noClick. Store a boolean value of false
  
  function handleCardClick(e) {  //declare a function. Name it the same as listener in new div in function above
    if (noClicking) return; //declear conditional. create a variable above to set it to. if variable boolean equals false return
    if (e.target.classList.contains("flipped")) return; //declear conditional. if event target class list is a child of "flipped" return
  
    let currentCard = e.target; //declare a variable. Name it currentCard. store the value of the event target
    currentCard.style.backgroundColor = currentCard.classList[0];  //give current card a style backgroundColor equal to index 0 of the array
  
    if (!card1 || !card2) { //Declare a conditional. If not card one or card two ...then
      currentCard.classList.add("flipped"); //add a class of "flipped" to currentCard
      card1 = card1 || currentCard; //if card one is equal to card one or equal to currentCard... 
      card2 = currentCard === card1 ? null : currentCard; //check if card two is equal to //add ternary Operator
    }
  
    if (card1 && card2) {  //Declare a condition. If card1 and card2
      noClicking = true;  // noClicking (false) = true
      // debugger
      let gif1 = card1.className; //then delcare a variable. Store card1 and add a class name to it
      let gif2 = card2.className; //then also delcare a variable. Store card2 and add a class name to it
  
      if (gif1 === gif2) { //declare a conditional. if card1's class name is strickely equal to card 2's class name then...
        cardsFlipped += 2; //add two to cards flipped variable;
        card1.removeEventListener("click", handleCardClick); //remove event listener of card 1
        card2.removeEventListener("click", handleCardClick); //remove event listener of card 2
        card1 = null; //check card1 to store a value of null again
        card2 = null; //check card2 to store a value of null again
        noClicking = false; //check noClicking = false
      } else { //else
        setTimeout(function() {       //set a timeout function of 2 seconds that reutrns card1 and 2 style background color to empty 
          card1.style.backgroundColor = "";
          card2.style.backgroundColor = "";
          card1.classList.remove("flipped"); //removes the card 1 and 2 class list of flipped
          card2.classList.remove("flipped");
          card1 = null;   //checks card 1 and 2 value is null
          card2 = null;
          noClicking = false; //checks noClicking is false
        }, 1500);
      }
    }
  
    if (cardsFlipped === COLORS.length) alert("game over!");
  }
  
  createDivsForColors(shuffledColors);