/* This module contains Harry Potter class, responsible for 
 * drawing character
 */

/* Harry Potter Class initialization */
function HarryPotter(x, y, direction){
    this.characterX = x;
    this.characterY = y;
    console.log(this.characterX, this.characterY);
    this.characterDir = direction;
    this.pixelSize = 2;
    this.walkCount = 1;
    this.roleRow = 10;
    this.roleCol = 6;
    this.steps = 0;
    this.drawHarry = drawHarry;
}

/* drawHarry: draw Harry on canvas according to direction */
function drawHarry(){
    var HPframe;
    /* compute the image number */
    var imgNum = this.steps + 1;
    
    switch (this.characterDir){
        case 'left':
            HPframe = document.getElementById('left' + imgNum);
            break;
        
        case 'right':
            HPframe = document.getElementById('right' + imgNum);
            break;
            
        case 'up':
            HPframe = document.getElementById('up' + imgNum);
            break;
        
        case 'down':
            HPframe = document.getElementById('down' + imgNum);
            break;
        
        default: 
            console.log('unknown direction');
            return;
    }
    
    /***** want this variable to be responsible for the image w+h */
    create_image(this.characterX, this.characterY, HPframe);
    
}
