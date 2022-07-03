/* you are a traveler on a 2d grid, you begin on
the top left corner and your goal is to travel to the
bottom-right corner. You may only move down or right.

in how many ways can you travel to your goal
on a grid with dimensions m * n?
*/

/*
|--|--|--|
|--|--|--|
|--|--|--|

|--|--|--|--|
|--|--|--|--|
|--|--|--|--|


*/

// const gridTraveler = (m, n, memo = {}) => {
//     const maxMovesRight = m;
//     const maxMovesDown = n;
//     let posx;
//     let posy;
//     if (m === n) {
//         return memo[m * n];
//     }
//     if (n in memo) return memo[n];

//     return m * n;
// }

// ----------------------Original Solution ---------------------------

// const gridTraveler = (m, n, memo = {}) => {
//     if (m === 1 && n === 1 ) return 1;
//     if (m === 0 || n == 0 ) return 0;
//     return gridTraveler(m -1, n) + gridTraveler(m, n-1);
//     // whole idea of recursive functions
//     // find a base case or two
//     // recursively call function iterating down or up
//     // until you hit basecases
//     //also draw trees lol, it helps!
// }

// ----------------------Memoized Solution ---------------------------

const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    // instantiate position key
    if (key in memo) return memo[key];
    // check if key is in memo
    if (m === 1 && n === 1 ) return 1;
    if (m === 0 || n == 0 ) return 0;
    // remember to make the original return a memo
    memo[key] = gridTraveler(m -1, n, memo) + gridTraveler(m, n-1, memo);
    // and remember to pass our new memo to each function!
    return memo[key];
}