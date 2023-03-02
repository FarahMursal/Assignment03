let coinFlip;
let currentStreak = 0;
let longestStreak = 0;

do {

  coinFlip = Math.floor(Math.random() * 2);

  if (coinFlip === 0) {
    console.log("Heads");
    currentStreak++;


    if (currentStreak > longestStreak) {
      longestStreak = currentStreak;
    }
  } else {
    console.log("Tails");
    currentStreak = 0;
  }
} while (coinFlip !== 1);

console.log("Longest streak: " + longestStreak);