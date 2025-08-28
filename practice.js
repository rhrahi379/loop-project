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
            alert('Aare (Easy, Medium, Hard) egular moddhe jekono ekta lekho.');
    }
    while (attamps < maxAttamps) {
        let game = parseInt(prompt(`Ekhon niche ekta sonkha chinta kore lekho jeta 0 theke ${range} er moddhe. ar tomar ${maxAttamps - attamps} bar chanch ase.'`));
        if (random === game) {
            alert(`Congratulations ${game} ei number ti correct ar tumi eta ${attamps + 1} bar try kore pereso.`);
            break;
        }
        else if (game < random) {
            alert('Ei number ta ektu soto sonkhar, arektu boro sonkha diye try koro.');
        }
        else {
            alert('Ei number ta ektu boro sonkhar, arektu soto sonkha diye try koro');
        }
        attamps++;
    }
    if (attamps === maxAttamps) {
        console.log(`Sorry! tomar ar kono chanch naii, number ta ${random} silo.`);
    }
}

let rahi = prompt('(Easy,  Medium,  Hard)  ei gular moddhe, jekono ekta niche lekho.').toUpperCase();
myFunction(rahi);
