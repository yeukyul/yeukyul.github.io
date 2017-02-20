/* This module contains functions about randomly generated function */


/* 
 * random_randint: return a random number within the bound (lo, hi)
 */
function random_randint(lo, hi){
    var range = hi - lo;
    return lo + Math.floor(Math.random() * range);
}


/*
 * random_choice: return a random item in a array 
 */
function random_choice(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}