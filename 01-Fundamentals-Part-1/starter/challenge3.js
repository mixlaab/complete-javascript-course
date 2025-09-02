// // Data 1
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

// // Data Bonus 1
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

// Data Bonus 2
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 101;
const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 106;

// 1. Calculate the average score for each team, using the test data
const dolphinsAvgScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;
const koalasAvgScore = (koalasScore1 + koalasScore2 + koalasScore3)/3;

// 2.Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that as well
if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore > 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore > 100) {
  console.log('Koalas win the trophy 🏆');
} else if (dolphinsAvgScore > 100) {
  console.log('Both teams win the trophy 🏆');
} else {
  console.log('No team wins the trophy 😔');
}
