let value=10;
let randomNumber =Math.floor(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const remaining = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const reset = document.getElementById("reset");
submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value); 
    if(value<=1){
       lowOrHi.innerHTML=`game over the guess value was:  ${randomNumber}: press reset to play again`
       remaining.innerHTML=`0`;
       guessSlot.innerHTML += `${guess}, `;
       submit.disabled=true;
       userInput.disabled=true;
    }
    else{
    if(isNaN(guess)|| guess<1 || guess>100||guess==''){
        alert('PLease enter a valid number');
    }
    else{
        value--;
        if(guess===randomNumber){
            lowOrHi.innerHTML="YOU GUESSED IT RIGHT:  press reset button to play again";
             submit.disabled=true;
             userInput.disabled=true;
        }
        else{
          remaining.innerHTML=`${value}`;
          guessSlot.innerHTML += `${guess}, `;
          if(guess>randomNumber){
             lowOrHi.innerHTML="value is high"
          }
          else if(guess<randomNumber){
             lowOrHi.innerHTML="value is low"
          }
          userInput.value = '';


        }
       
    }
}
})
reset.addEventListener("click", function() {
    value = 10;
    remaining.innerHTML=`${value}`;
    guessSlot.innerHTML=""
    submit.disabled = false;
    userInput.disabled=false;
    userInput.value = '';
    lowOrHi.innerHTML="";
    randomNumber = Math.floor(Math.random() * 100 + 1);
});
