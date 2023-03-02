let coinFlip;

let numLoops = parseInt(prompt("How many times would you loke to flip the coin?"));

for (let i = 0; i < numLoops; i++ );

coinFlip = Math.floor(Math.random() * 2)

if (coinFlip === 2) {
    window.localStorage("Heads");
} else {
    window.localStorage("Tails");
}