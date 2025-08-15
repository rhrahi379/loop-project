// js loop project


function myFunction(rahi) {
    let attamps = 0;
    let maxAttamps;
    let range;
    let random;
    switch (rahi) {
        case 'EASY':
            range = 10;
            maxAttamps = 5;
            random = Math.floor(Math.random() * 10 + 1);
        break;
        case 'MEDIUM':
            range = 20;
            maxAttamps = 7;
            random = Math.floor(Math.random() * 20 + 1);
        break;
        case 'HARD':
            range = 30;
            maxAttamps = 10;
            random = Math.floor(Math.random() * 30 + 1);
        break;
        default:
            alert('Invalid type error, please choose (Easy, Medium, Hard)');
    }
    while (attamps < maxAttamps) {
        let game = parseInt(prompt(`Enter a number between 0 to ${range} and you have ${maxAttamps - attamps} attamps remaining.'`));
        if (random === game) {
            console.log(`Congratulations ${game} is correct number and you got it in ${attamps + 1} attamps`);
            break;
        }
        else if (game < random) {
            alert('too low, try again');
        }
        else {
            alert('too high, please try again');
        }
        attamps++;
    }
    if (attamps === maxAttamps) {
        console.log(`Sorry you out of maximum attamps, the number was ${random}`);
    }
}

let rahi = prompt('Choose a level  (Easy,  Medium,  Hard)').toUpperCase();
myFunction(rahi);

let name = 'rejaul';
console.log(name);l