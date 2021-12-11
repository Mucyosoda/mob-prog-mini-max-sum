function miniMaxSum(arr) {
    // Write your code here
const arrs = arr.sort(function(a,b){ return a - b});
const x =arrs.slice(1);
const y = arrs.slice(0, -1);

const minus = y.reduce((a,b) => a+b, 0);
const maximus = x.reduce((a,b) => a + b, 0);
const sums=[minus, maximus];
console.log(sums.join(' '));
}