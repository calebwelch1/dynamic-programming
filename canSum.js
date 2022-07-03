/* 
function canSum(targetSum, numbers)
takes target sum and array

function returns boolean whether is possible to make 
target sum with numbers in array.
num can be used multuple times. 
assume all inputs are non-negative

*/

// const canSum = (target, numbers) => {
//     // make base case
//     // iterate and recursively call
//     //until you hit basecase;
//     let nextArr = numbers;
//     let canItSum;
//     if (target === 0) canItSum = true;
//     if (target < 0 ) canItSum = false;
//     return canSum(target-numbers[i], nextArr);
//         // else if(){
//         //     return false;
//         // }
//     // return true;
// };

const canSum = (target, numbers) => {
    
};

console.log('canSum 0 from 1,0', canSum(0, [1,0]));
console.log('canSum 15 from 10,5', canSum(15, [10, 5]));
console.log('canSum 11 from 3,3', canSum(11, [3, 3]));
console.log('canSum 100 from 10,10', canSum(100, [10, 10]));
