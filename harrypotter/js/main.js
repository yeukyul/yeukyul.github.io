/* This js file includes game loop and general game function */

/***********************************************************/
/******************** Global Variables *********************/
/***********************************************************/

/* canvas size */
var width = 1500;
var height = 1000;

/* game element */
var timerDelay = 5;
var colorScheme = {'midTree' : 'rgb(76, 176, 52)',
                    'lightTree' : 'rgb(129,195,71)',
                    'darkTree' : 'rgb(1,147,83)',
                    'road' : 'rgb(217,235,177)',
                    'background' : 'rgb(149,208,221)',
                    'water' : 'rgb(253,219,1)',
                    'broomOrange' : '#E19314',
                    'yellow' : '#FFEA43'};
var dirs = {'up' : [-1, 0],
            'down' : [+1, 0],
            'left' : [0, -1],
            'right' : [0, +1]};

/* initial map dimension */
var viewRow = 13;
var viewCol = 6;
var gamemap = new gameMap(viewRow, viewCol, 1200, 600);
var initRow = 10;
var initCol = 6;

gamemap.mapWall[initRow][initCol] = 2;
gamemap.getGridPosition(initRow,initCol);

/* initial character position */
var roleX = (gamemap.point1[0] + gamemap.point2[0])/2;
var roleY = (gamemap.point1[1] + gamemap.point3[1])/2;
var pixel = 6 * 1.5 * 1.5;
var direction = 'right';
var character = 'harry';
var player = new HarryPotter(width/2, height/2, direction);
var zoomindex = 0;
var isStop = false;  // check if game is paused

/***********************************************************/
/**************** Sample Square Class **********************/
/***********************************************************/

function square(type){
    this.cx = 20;
    this.cy = 20;
    this.side = 20;
    this.draw = function(){
        create_rect(this.cx, this.cy, this.side, this.side);
    }
    this.move = function(){
        this.cx += 1;
        this.cy += 1;
    }
}

/***********************************************************/
/************************ Init Fn **************************/
/***********************************************************/


/* initial variables*/

/* testing purppose */
var s = new square();

/***********************************************************/
/************************ Draw Fn **************************/
/***********************************************************/

function clearCanvas(){
    var context = get_context();
    context.clearRect(0, 0, width, height);
    context.beginPath();
};

function drawWall(){
    var row, col;
    for (row = 0; row < gamemap.mapWall.length; row++){
        for (col = 0; col < gamemap.viewCol + 1; col++){
            
            if (gamemap.mapWall[row][col] === 3 && 
                col < gamemap.viewCol && 
               (gamemap.playerD+gamemap.stepSize*(gamemap.viewRow-row-1)>0)){
                gamemap.getGridPosition(row,col);
                create_polygon([gamemap.point5,gamemap.point6,
                                gamemap.point8,gamemap.point7], 
                                colorScheme['lightTree']);
                
                if (row === gamemap.mapWall.length - 1){
                     create_polygon([gamemap.point3,gamemap.point4,
                                gamemap.point8,gamemap.point7], 
                                colorScheme['darkTree']);
                 }
                if (gamemap.mapWall[row][col+1] != 1 && 
                    gamemap.mapWall[row][col+1] != 3){
                    create_polygon([gamemap.point8,gamemap.point6,
                                gamemap.point2,gamemap.point4], 
                                colorScheme['frontTree']);
                }
                
            }
            
            if (gamemap.mapWall[row][col]===1){
                if (col<gamemap.viewCol && 
                    (gamemap.playerD + gamemap.stepSize*(gamemap.viewRow-row-1)>0)){
                    gamemap.getGridPosition(row,col);
                    gamemap.drawStoneWallLight(gamemap.point5,
                            gamemap.point6,gamemap.point7,gamemap.point8);
                     if (gamemap.mapWall[row+1][col]!=3 && 
                               gamemap.mapWall[row+1][col]!=1){
                         gamemap.drawStoneWallDark(gamemap.point3,
                            gamemap.point4,gamemap.point7,gamemap.point8);
                     }
                    if (gamemap.mapWall[row][col+1]!=1 &&  
                               gamemap.mapWall[row][col+1]!=3){
                         gamemap.drawStoneWallDark(gamemap.point8,
                            gamemap.point6,gamemap.point4,gamemap.point2);
                    }
                }
            }
            /* draw harry if encounter harry on map */
            if (gamemap.mapWall[row][col] === 2 &&
                character ==='harry'){
                /*
                gamemap.getGridPosition(row,col);
                player.characterX = (gamemap.point1[0]+gamemap.point2[0])/2;
                player.characterY = (gamemap.point1[1]+gamemap.point3[1])/2;
                player.drawHarry();
                */
            }
        }
        
        for (col = gamemap.mapWall[0].length-1; col > gamemap.viewCol-1; col--){
            if (gamemap.mapWall[row][col] === 3 && 
                col > gamemap.viewCol &&
                (gamemap.playerD+gamemap.stepSize*(gamemap.viewRow-row-1)>0)){
                gamemap.getGridPosition(row,col);
                create_polygon([gamemap.point5,gamemap.point6,
                                gamemap.point8,gamemap.point7],
                              colorScheme['lightTree']);
                if (row === gamemap.mapWall.length - 1){
                    create_polygon([gamemap.point3,gamemap.point4,
                                    gamemap.point8,gamemap.point7],
                                  colorScheme['darkTree']);
                }
                if (gamemap.mapWall[row][col-1] != 1 &&
                   gamemap.mapWall[row][col-1] != 3){
                    create_polygon([gamemap.point1,gamemap.point5,
                                    gamemap.point7,gamemap.point3],
                                  colorScheme['frontTree']);
                }
            }
            if (gamemap.mapWall[row][col] === 3 &&
               col === gamemap.viewCol){
                gamemap.getGridPosition(row,col);
                create_polygon([gamemap.point5,gamemap.point6,
                            gamemap.point8,gamemap.point7],
                          colorScheme['lightTree']);
                if (row === gamemap.mapWall.length-1){
                    create_polygon([gamemap.point3,gamemap.point4,
                            gamemap.point8,gamemap.point7],
                          colorScheme['darkTree']);
                }
            }

            if (col > gamemap.viewCol &&
               gamemap.mapWall[row][col] === 1 &&
               (gamemap.playerD + gamemap.stepSize * (gamemap.viewRow - row - 1)) > 0){
                gamemap.getGridPosition(row,col)
                gamemap.drawStoneWallMid(gamemap.point5,
                        gamemap.point7,gamemap.point1,gamemap.point3);
                gamemap.drawStoneWallDark(gamemap.point3,
                        gamemap.point4,gamemap.point7,gamemap.point8);
                gamemap.drawStoneWallLight(gamemap.point5,
                        gamemap.point6,gamemap.point7,gamemap.point8);
            }
            if (col == gamemap.viewCol && 
                gamemap.mapWall[row][col] === 1 &&
               (gamemap.playerD+
                    gamemap.stepSize*(gamemap.viewRow-row-1)>0)){
                gamemap.getGridPosition(row,col);
                gamemap.drawStoneWallDark(gamemap.point3,
                        gamemap.point4,gamemap.point7,gamemap.point8);
                gamemap.drawStoneWallLight(gamemap.point5,
                        gamemap.point6,gamemap.point7,gamemap.point8);
            }
            if (gamemap.mapWall[row][col] === 2 &&
               character === 'harry'){
                /*
                gamemap.getGridPosition(row,col);
                player.characterX = (gamemap.point1[0]+gamemap.point2[0])/2;
                player.characterY = (gamemap.point1[1]+gamemap.point3[1])/2;
                player.drawHarry();
                */
            }
        }

    }
}

/***********************************************************/
/********************* Event Handlers **********************/
/***********************************************************/
var prevStep = 0;
var steps = 0;
var HPframe = document.getElementById('down1');

/* check if given cell is legal */
function isLegalMove(row, col){
    if (row >= gamemap.mapRoad.length || 
        col >= gamemap.mapRoad[0].length ||
        row < 0 || col < 0){
        return false;
    }
    
    return gamemap.mapRoad[row][col] == 1;
};


/* 
 * movePlayer: change direction if player head to a new direction,
                else update map and move player
 */
function movePlayer(direction){
    
    /* compute new row and col */
    var dValue = dirs[direction];
    var drow = dValue[0]; 
    var dcol = dValue[1];
    var newRow = player.roleRow + drow;
    var newCol = player.roleCol + dcol;
    
    /* if not original direction, change direction */
    if (player.characterDir != direction){
        player.characterDir = direction;
        return;
    }
    
    /* if is original direction, head towards that */
    if (!isLegalMove(newRow, newCol)) return;
    else {
        /* re-assign original position to be ground */
        console.log('drow, dcol', drow, dcol);
        gamemap.mapWall[player.roleRow][player.roleCol] = 0;
        player.roleCol = newCol; player.roleRow = newRow;
        gamemap.mapWall[player.roleRow][player.roleCol] = 2;
        player.walkCount++;
        gamemap.viewRow += drow;
        gamemap.viewCol += dcol;
    }
    
}

$(document).keydown(function(e) {
    
    /* update harry potter frame */
    player.steps++; player.steps %= 3;
    
    switch(e.which) {
            
        case 37: // left
            movePlayer('left'); 
            break;

        case 38: // up
            movePlayer('up'); 
            break;

        case 39: // right
            movePlayer('right');    
            break;

        case 40: // down
            movePlayer('down'); 
            break;
            
        case 69: // e
            gamemap.theta -= 0.01;
            gamemap.deltaChange += 1;
            gamemap.vp1Y -= Math.pow(gamemap.deltaChange, 2);
            gamemap.playerD += Math.pow(gamemap.deltaChange, 2);
            gamemap.initCubeHeight = Math.sin(gamemap.theta)*gamemap.actCubeSize;
            break;
            
        case 83: // s
            zoomindex -= 1;
            gamemap.viewRow +=1;
            gamemap.actCubeSize *=0.5;
            gamemap.vp1Y -=100;
            gamemap.initCubeHeight *= 0.4;
            gamemap.playerD *= 2;
            player.pixelSize /= 1.5;
            break;
            
        case 87: // w
            zoomindex += 1;
            gamemap.viewRow -= 1;
            gamemap.actCubeSize /= 0.5;
            gamemap.vp1Y += 100;
            gamemap.initCubeHeight /= 0.4;
            gamemap.playerD /= 2;
            player.pixelSize *= 1.5;   
            break;
        
        case 84: // s : stops current game
            isStop = !isStop;
            break;

        default: return; // exit this handler for other keys
    }
    /* prevent the default action (scroll / move caret) */
    e.preventDefault();
});
                                                
/***********************************************************/
/********************* main game fns ***********************/
/***********************************************************/


function timerFired(){
    /* update game variables */
    s.move();
    
};

function redrawAll(){
    
    /* clear canvas for re-drawing */
    clearCanvas();
    
    /* background color */
    fill_background(colorScheme['background']);
    
    /* drawing component */
    s.draw();
    
    gamemap.drawGround();
    drawWall();
    player.drawHarry();
    
};


/***********************************************************/
/********************* main game loop **********************/
/***********************************************************/

/* iterative function, equivalent to game loop */
function run() {
    
    /* test for finish, not needed for now */ 
    if (isStop) {
        
        /* reset interval */
        clearInterval(id);
        
    } else { 
        
        /* function calls  */
        timerFired();
        redrawAll(); 
    }
    
};

/* main function */
function main(){
    var id = setInterval(run, timerDelay);
};

main();