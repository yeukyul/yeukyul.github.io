
/* translated from main.py */


/* 
 * =============================================================================
 * MAP INITIALIZATION FUNCTIONS
 * =============================================================================
 */

/*
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function random_randint(lo, hi){
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

/* 
 * getRowCol: get the row and col of certain number on the wall map 
 */
function getRowCol(n, listN){
    // get the row and col of certain number on the wall map
    var pos = [];
    for (row = 0; row < listN.length; row++){
        if (listN[row].indexOf(n) >= 0){
            pos.push([row,listN[row].indexOf(n)]);
        }
    }
    return pos;
}

/*
 * mList is the wall map
 * rList is the road map
 * randomly place a number on the legal grid
 */
function randomlyPlaceValue(value, mList, rList, monList){
    while (true){
        var row = random_randint(0, mlist.length - 1);
        var col = random_randint(0, mlist[0].length - 1);
        if (rList[row][col] === 1 && mList[row][col] === 0){
            monList[row][col] = value;
            return [row , col]
        }
    }
}

function make2dList(rows, cols){
    var n = new Array(rows);
    for (row = 0; row < rows; row++){
        for (col = 0; col < cols; col++){
            n[row].push(0);
        }
    }
}

/*
 * =============================================================================
 * MAP INITIALIZATION VARIABLES
 * =============================================================================
*/

