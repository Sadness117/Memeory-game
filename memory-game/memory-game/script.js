const gameContainer = document.getElementById("game");
const input = document.querySelector('#numberOfElements');
const resetButton = document.getElementById('#restart');
let moves = 0;
let numberOfSelectedElements = 0;

let randomcolor = 0;
let r = 0;
let g = 0;
let b = 0;

const newElements = [];

const COLORS = [];




//this function does random colors each time


function colorPicker(number){
for (i = 0; i<number; i++){
r = Math.floor(Math.random() * 255)
g = Math.floor(Math.random() * 255)
b = Math.floor(Math.random() * 255)
randomColor = `rgb(${r},${g},${b})`;

//this gets 2 sets so they can match each other
  COLORS.push(randomColor);
  COLORS.push(randomColor);
}


}




// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  console.log('shuffled');
  return array;
}



// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card


function createDivsForColors(colorArray) {


  
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
// newDiv.innerText = color;
// newDiv.style.color = color
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}


var guess = '';

var newColor='';
// TODO: Implement this function!
function handleCardClick(event) {
  
    alternate(event);

  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target.className);
}

var pause = 0;
let firstClick = '';
  let secondClick = '';
function alternate(event){
  
  if (guess === ''){
  
    newColor = event.target.className;
    guess = event.target.className;
    firstClick = event.target;
    firstClick.style.backgroundColor = newColor;
    firstClick.removeEventListener("click", handleCardClick);
    firstClick.classList.add('1');
  moves++;
  pause = 0;
  }
  else if (guess === event.target.className && pause === 0){
    console.log(guess);
    guess = '';
    secondClick = event.target;
    console.log(secondClick);
    secondClick.removeEventListener("click", handleCardClick);
    secondClick.style.backgroundColor= newColor;
    firstClick.classList.remove('1');
    // secondClick.classList.add('1');
    secondClick = '';
    points -= 2;
    moves++;

  }
else if (event.target.className !== newColor && pause ===0){


pause = 1;
    secondClick = event.target;
    secondClick.style.backgroundColor = event.target.className;
    let afterClick1 = firstClick;
let afterClick2 = secondClick;

    setTimeout(function(){
      firstClick.addEventListener("click", handleCardClick);
    afterClick1.style.backgroundColor = 'white';
    afterClick2.style.backgroundColor = 'white';
    guess = '';
    firstClick.classList.remove('1');
    secondClick = '';
    moves++;
    pause = 0;
    }, 1000); 

  }
  if (points === 0){
    setTimeout(function(){
      alert(`you won in ${moves} moves!`);
    },100)

  }

}







var restartGame = false;

let preventClick = false;
let points = 0;
myForm.addEventListener('submit', function(e){
  e.preventDefault();
  if (preventClick === false){
  numberOfSelectedElements = input.value/2;

  console.log(numberOfSelectedElements)
  
  colorPicker(numberOfSelectedElements);
  shuffledColors = shuffle(COLORS);
  createDivsForColors(shuffledColors);
  points = COLORS.length;
  preventClick = true;
  }
  })




function reset(){
  restartGame = true;
shuffle(COLORS);
}
