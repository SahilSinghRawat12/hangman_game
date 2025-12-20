const buttons = document.querySelector(".buttons");
const wordDisplay = document.querySelector(".word");
const hints = document.getElementById("hintAns");
const wrongGuess = document.getElementById('wrong-guess');;
const result_screen = document.getElementById("result-screen");
const answer = document.getElementById("answer");
const winLoss = document.querySelector("#result-screen h2");
const image = document.getElementById("img");

let maxGuesses = 6;
let currentWord = 0;
let correctLetter = [];

function getRandom(){
    const {word , hint} = wordList[Math.floor(Math.random() * wordList.length)];
     currentWord = word;    
      
     
    wordDisplay.innerHTML = word.split("").map(()=> '<li class="letters"></li>').join("");
    hints.textContent = hint;
 
}

let cnt = 0;
wrongGuess.innerText = `${cnt}/6`;
image.src = `./images/hangman-${cnt}.svg`;

function initGame(button , clickedLetter)
{
   

    if(currentWord.includes(clickedLetter))
    {
        [...currentWord].forEach((letter , index)=>{
            if(letter === clickedLetter)
            {
                correctLetter.push(letter);
                wordDisplay.querySelectorAll('li')[index].innerText = letter;
                wordDisplay.querySelectorAll('li')[index].classList.add('letters');  
            }
           
        });

        
    }

   

    else 
    {
     
        if(cnt<6)
        {
         cnt++;
         wrongGuess.innerText = `${cnt}/${maxGuesses}`;
         image.src = `./images/hangman-${cnt}.svg`;
         
        }

        if(cnt===6) 
        {
                
            setTimeout(()=>{
                result_screen.style.display = "flex"
                answer.innerText = currentWord;
                winLoss.innerText = 'Loser';
            }, 300)
              
        }
        
      
    }

    if(correctLetter.length === currentWord.length)
        {
            setTimeout(()=>{
                result_screen.style.display = "flex"
                answer.innerText = currentWord;
                winLoss.innerText = 'Winner';
            }, 300)
              
        } 
    
    
}


for(let i = 97 ; i<= 122 ; i++)
{
    const alphabets = String.fromCharCode(i);
    
    const btn = document.createElement("button");
    btn.textContent = alphabets;
    btn.classList.add("btn");
    buttons.appendChild(btn);
    btn.addEventListener('click' , e=>initGame(e.target , alphabets) );
   
 
}

getRandom()
