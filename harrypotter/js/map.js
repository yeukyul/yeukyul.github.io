/* translated from map.py */

/* Sample class */
/*
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
*/

var width = 1500;
var height = 1000;

/*
 *#################################################
 * Class Initialization
 *#################################################
 */

/* initialization function */
function mapInit(){
    this.mapwall = [];
    this.mapRoad = [];
    this.mapMonster = [];
    this.mapItem = [];
}

/* initialization */
function initcolorSet(){
    /* initial color set */
    color1 = [76,176,52];
    color2 = [129,195,71];
    color3 = [1,147,83];
    color4 = [217,235,177];
    color5 = [149,208,221];
    color6 = [253,219,1];
    this.colorSet = {midTree :color1, lightTree:color2,
                     darkTree: color3, road: color4,
                     background: color5, water: color6};
}

/* class declaration */
function gameMap(type, eyeCoord){
    
    /* variable initilization */
    mapInit();
    initcolorSet();
    this.cellWidth = 800 * 1.5; // x
    this.cellHeight = 800 * 2; // y
    this.cellDepth = 800; // z
    this.width = width; // screen width
    this.height = height;
    this.vpx = this.width/2; // vanish point x at screen
    this.vpy = this.height/2 - 200; // vanish point y at screen
    this.speed = 400; // the change speed
    this.initcolorSet = initcolorSet;
    
    if (eyeCoord == undefined) this.eyeCoord = [4200,-1116,-9156];
    else (this.eyeCoord = eyeCoord);
    
    /* testing purpose */
    // this.randomGetPosition(); // !!!!! Function not written
    
    /* Class methods */
    this.getCellCoord = getCellCoord;
    this.get3dCellCoord = get3dCellCoord;
    this.get3dPointCoord = get3dPointCoord;
    this.getCellScreenPos = getCellScreenPos;
    this.checkWithin = checkWithin;
    /*
    this.drawTrees = drawTrees;
    this.drawGrayWalls = drawGrayWalls;
    this.drawGrayStoneWalls = drawGrayStoneWalls;
    this.drawFire = drawFire;
    this.drawWalls = drawWalls;
    this.drawTrainDoors = drawTrainDoors;
    this.drawTrainWindows = drawTrainWindows;
    */
}



/*
 *#################################################
 * 3D projection functions  *#################################################  
 */

function getCellCoord(row, col){
    var points = [];
    points.push([col * this.cellWidth,0,-row * this.cellDepth]); //0
    points.push([(col+1)*this.cellWidth,0,-row*this.cellDepth]); //1
    points.push([col*this.cellWidth,0,-(row+1)*this.cellDepth]); //2
    points.push([(col+1)*this.cellWidth,0,-(row+1)*this.cellDepth]); //3
    points.push([col*this.cellWidth,-this.cellHeight,-row*this.cellDepth]); //4
    points.push([(col+1)*this.cellWidth,-this.cellHeight,-row*this.cellDepth]); //5
    points.push([col*this.cellWidth,-this.cellHeight,-(row+1)*this.cellDepth]); //6
    points.push([(col+1)*this.cellWidth,-this.cellHeight,-(row+1)*this.cellDepth]); //7
    return points;
}

/* 
 * get3dCellCoord: returns a 2d list 
 */
function get3dCellCoord(row, col, level){
    var points  =[];
    points.push([col*this.cellWidth,-level*this.cellHeight,-row*this.cellDepth]);
    points.push([(col+1)*this.cellWidth,-level*this.cellHeight,-row*this.cellDepth]);
    points.push([col*this.cellWidth,-level*this.cellHeight,-(row+1)*this.cellDepth]);
    points.push([(col+1)*this.cellWidth,-level*this.cellHeight,-(row+1)*this.cellDepth]);
    points.push([col*this.cellWidth,-(level+1)*this.cellHeight,-row*this.cellDepth]);
    points.push([(col+1)*this.cellWidth,-(level+1)*this.cellHeight,-row*this.cellDepth]);
    points.push([col*this.cellWidth,-(level+1)*this.cellHeight,-(row+1)*this.cellDepth]);
    points.push([(col+1)*this.cellWidth,-(level+1)*this.cellHeight,-(row+1)*this.cellDepth]);
    return points;
}

/*
 * get3dPointCoord: return coordinate of single point
 */
function get3dPointCoord(row, col, level){
    return [[col*this.cellWidth,-level*this.cellHeight,-row*this.cellDepth]];
};

/*
 * getCellScreenPos: get the position of a point on the screen
*/
function getCellScreenPos(coords){
    var thisCoord, x, y, z, f;
    var screenPos = [];
    for (i = 0; i < coords.length; i++){
        thisCoord = coords[i];
        x = thisCoord[0]; y = thisCoord[1]; z = thisCoord[2];
        x -= this.eyeCoord[0];
        y -= this.eyeCoord[1];
        z -= this.eyeCoord[2];
        f = (this.height - this.vpy) / z;
        x = x*f; y = y*f;
        screenPos.push([this.vpx + Math.round(x), this.vpy + Math.round(y)]);
    }
    return screenPos
};

/*
 * checkWithin: check if a given point is wihtin the game screen 
 */
function checkWithin(pos){
    pos.forEach(function(point){
        if (point[0] > 0 || point[0] < this.width ||
            point[1] > 0 || point[1] < this.height){
            return true;
        }
    });
    return false;
};

/*
 *#################################################
 * draw cell surface function
 *#################################################  
 */


/*
 *#################################################
 * Intergrated Draw Function  *#################################################  
 */

function drawTrees(row, col, eyeCol, i){
    
    var cell, pos, posList;
    
    /* get cell coord */
    cell = this.get3dCellCoord(row, col, i); 
    
    /* check if viewer can see the cell */
    if (cell[cell.length-1][2] > this.eyeCoord[2]){
        pos = this.getCellScreenPos(cell);
        
        /* draw only if any point of cell within screen */
        if (this.checkWithin(pos)){
            
            /* top surface */
            posList = [pos[4],pos[5],pos[7],pos[6]];
            create_polygon(posList, this.colorSet['LightTree']);
            
            /* case 1: if cell on the left, draw right, top, front */
            if (col < eyeCol){
                if (this.mapWall[i][row+1][col]!=1 && this.mapWall[i][row+1][col]!=3){
                    /* front surface */
                    posList = [pos[2],pos[3],pos[7],pos[6]];
                    create_polygon(posList, this.colorSet['darkTree']);
                    
                }
                
                if (this.mapWall[i][row][col+1]!=1 && this.mapWall[i][row][col+1]!=3){
                    /* front surface */
                    posList = [pos[7],pos[5],pos[1],pos[3]];
                    create_polygon(posList, this.colorSet['midTree']);
                }
            }
            
            /* case 2: if cell is right before our eye, only need to draw the front  */
            else if (col === eyeCol){
                
                if (this.mapWall[i][row+1][col]!=1 && this.mapWall[i][row+1][col]!=3){
                    posList = [pos[2],pos[3],pos[7],pos[6]];
                    create_polygon(posList, this.colorSet['darkTree']);
                }
                
            }
            
            /* case 3: draw left, top and front faces for cell on the right side */
            else if (col > eyeCol){
                
                if (this.mapWall[i][row+1][col]!=1 && this.mapWall[i][row+1][col]!=3){
                    posList = [pos[2],pos[3],pos[7],pos[6]];
                    create_polygon(posList, this.colorSet['darkTree']);
                }
                
                 if (this.mapWall[i][row][col-1]!=1 && this.mapWall[i][row][col-1]!=3) {
                     posList = [pos[0],pos[4],pos[6],pos[2]];
                    create_polygon(posList, this.colorSet['midTree']);
                 }
            }
        }
    }
};

function drawGrayWalls(row, col, eyeCol, playerRow, i){
    var cell, pos, posList;
    
    /* get cell coord */
    cell = this.get3dCellCoord(row, col, i); 
}

function drawGrayStoneWalls(row, col, eyeCol, playerRow){
    
}

/* 
 * drawFire: randomly select an image of file and blit it onto screen
 */
function drawFire(row, col, eyeCol, playerRow){
    
    var cell, pos, imgName, img, w, h, x, y;
    cell = this.getCellCoord(row,col);
    
    if (cell[cell.length-1][2] > this.eyeCoord[2]){
        
        pos = this.getCellScreenPos(cell);
        if (this.checkWithin)(pos){
            imgName = random_choice(['fire01.png','fire02.png','fire03.png',
                            'fire04.png','fire05.png','fire06.png']);
            img = '../Images/Items/fire/' + imgName;
            w = Math.round(Math.abs(pos[6][0]-pos[7][0]));
            h = Math.round(Math.abs(pos[6][1]-pos[2][1]));
        }
        
        /* !!!!!!!!!!!! Does it mean canvas width and height */
        if (w < 1000 && h < 1000){
            /* !!!!!!! need to transform width and height of img */
            x = pos[6][0]; y = pos[6][1];
            create_image(x, y, img);
        }
    }
}

function drawWalls(row, col, eyeCol, playerRow, i){
    
}

function drawTrainDoors(row, col, eyeCol, playerRow){
    
}

function drawTrainWindows(row, col, eyeCol, playerRow){
    
}