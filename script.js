let userChoice=document.querySelectorAll(".choises");
let scores=document.querySelectorAll("span");
let userScore=0;
let computerScore=0;

const computerChoice = ()=>{
    let arr=['rock','paper','scisor'];
    let compCoice=arr[Math.floor(Math.random()*3)]
    return compCoice;
}

const playGame=(choice)=>{

    console.log("user choice = ",choice);
   const compCoice = computerChoice();
    console.log("comp choice =",compCoice);
if(choice===compCoice)
{
    console.log("draw");
    scores[2].innerText=`Draw`;

}

else if((choice == 'rock' && compCoice == 'scisor')||(choice == 'paper' && compCoice == 'rock') ||(choice == 'scisor' && compCoice == 'paper'))
{
console.log('user won');
userScore++;
scores[0].innerText=userScore;
scores[2].innerText=`${choice} beats ${compCoice}`;


} 
else
{
    console.log("computer won");
computerScore++;
scores[1].innerText=computerScore;
scores[2].innerText=`${choice} lost to ${compCoice}`;

}

}


userChoice.forEach(element => {
    element.addEventListener('click',()=>{
    playGame(element.getAttribute('id')); 
})
        
});



// if(userChoice[idx].getAttribute('id')==computerChoice())
// {
//     console.log('won')
// userScore++;
// scores[0].innerText=userScore;
// }
// else 
// {
//     console.log("lost");
// computerScore++;
// scores[1].innerText=computerScore;
// }