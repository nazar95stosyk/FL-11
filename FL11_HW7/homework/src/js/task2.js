let game = confirm('Do you want to play a game?');
if(game === ' ' || game === null){
    alert('You did not become a billionaire, but can.');
}
let a = 3;
let b = 2;
let c = 4;
let currentPrize = 100;
let maxPrize1 = 100;
let userNum;
let randNum; 
let prize1 = 0;
let maxNum = 8;
let attempt = 3; 
if (game) {
    randNum = Math.floor(Math.random() * (maxNum + 1));
    while (attempt > 0) {
        userNum = parseInt(prompt(
            `Choose a roulette pocket number from 0 to ${maxNum}
             Attempt left: ${attempt}
             Total prize: ${prize1}$
             Possible prize on current attempt: ${maxPrize1}$`));
        if (userNum === randNum) {
            prize1 += maxPrize1;
            if (confirm(`Congratulation! Your prize is:${prize1}$ Do you want to continue?`)) {
                attempt = a;
                maxPrize1 = currentPrize * b;
                currentPrize = maxPrize1;
                maxNum += c;
                randNum = Math.floor(Math.random() * (maxNum + 1));
                
            } else {
                break;
            }
        } else {
            maxPrize1 = Math.floor(maxPrize1 / c);
            attempt--;
        }
    }
    alert(`Thank you for a game. Your prize is: ${prize1}$`);
} else {
    alert('You did not become a billionaire, but can.');
}