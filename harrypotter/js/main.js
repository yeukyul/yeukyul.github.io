/* This js file includes game loop and general game function */

/***********************************************************/
/******************** Global Variables *********************/
/***********************************************************/



/* canvas size */
width = 1500;
height = 1000;

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
var isStop = false;

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



/* initial game mode, do not redraw if unnecessary */
var s = new square();



/***********************************************************/
/************************ Draw Fn **************************/
/***********************************************************/

function clearCanvas(){
    var context = get_context();
    context.clearRect(0, 0, width, height);
    context.beginPath();
};


/***********************************************************/
/********************* Event Handlers **********************/
/***********************************************************/
var prevStep = 0;
var steps = 0;
var HPframe = document.getElementById('down1');

$(document).keydown(function(e) {
    steps++; steps %= 3;
    var imgNum = steps + 1;
    switch(e.which) {
        case 37: // left
        HPframe = document.getElementById('left' + imgNum);
        break;

        case 38: // up
        HPframe = document.getElementById('up' + imgNum);
        break;

        case 39: // right
        HPframe = document.getElementById('right' + imgNum);
        break;

        case 40: // down
        HPframe = document.getElementById('down' + imgNum);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
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
    fill_background("rgb(149,208,221)");
    
    /* drawing component */
    s.draw();
    create_image(100, 100, HPframe);
    
};


/***********************************************************/
/********************* main game loop **********************/
/***********************************************************/

/* iterative function, equivalent to game loop */
function run() {
    
    /* test for finish, not needed for now */ 
    if (false) {
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