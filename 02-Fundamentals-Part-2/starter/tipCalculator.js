// Tip 15% of bill if bill is between 50 and 300
// If different, then 20%

console.log(calcTip(1000));
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log(bills, tips, total);

function calcTip(bill) {
  let tip;
  (bill >= 50 && bill <= 300) ? tip = bill * 0.15 : tip = bill * 0.20;
  return tip;
}