/* this module contains the class definition of gameMap, 
 * as written in tp1
 */

function gameMap(type){
    this.mapInit = mapInit;
    this.mapInit();
    this.playerD = 800;
    this.cellSize = [3,5,16*2];
    this.stepSize = 100;
    this.width = width;
    this.height = height;
    this.vp1X = this.width/2;
    this.vp1Y = this.height/2 -500;
    this.actCubeSize = 125;
    this.theta = Math.pi/3;
    this.deltaChange = 1;
    this.viewRow = viewRow;
    this.viewCol = viewCol;  
    this.initCubeHeight = 100; 
    initcolorSet();
    
    this.perspectiverescale = perspectiverescale;
    
    this.randomGetPosition = randomGetPosition;
    this.randomGetWaterColor = randomGetWaterColor;
    this.getWaterCellPosition = getWaterCellPosition;
    this.drawWaterCell = drawWaterCell;
    this.randomGetPosition();
    this.randomGetWaterColor();
    this.getGridPosition = getGridPosition;
    this.getScale = getScale;
    this.resize = resize;
    this.resize();
    
    this.getGroundCellPosition = getGroundCellPosition;
    this.drawGround = drawGround;
    this.drawGroundCell = drawGroundCell;
    this.drawStoneWallLight = drawStoneWallLight;
    this.drawStoneWallDark = drawStoneWallDark;
    this.drawStoneWallMid = drawStoneWallMid;
    this.drawStoneWallCell1 = drawStoneWallCell1;
    this.drawStoneWallCell2 = drawStoneWallCell2;
    
    this.getCellPosition = getCellPosition;
    
}

function resize(){
    this.viewRow -=1;
    this.actCubeSize /=0.5;
    this.vp1Y +=100;
    this.initCubeHeight /= 0.4;
    this.playerD /=2;
}

function perspectiverescale(){
    this.theta -=0.01;
    this.deltaChange += 1;
    this.vp1Y -= Math.pow(this.deltaChange, 2);
    this.playerD += Math.pow(this.deltaChange, 2);
    this.initCubeHeight = Math.sin(this.theta) * this.actCubeSize;
}

function getScale(row){
    if (row === this.viewRow){
        this.scale = 1;
    }
    else if (this.playerD + this.stepSize * (this.viewRow - row) == 0){
        this.scale = 1000;
    }
    else{
        this.scale = this.playerD/(this.playerD + this.stepSize * (this.viewRow - row))
    }
    return this.scale
}

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

function getGridPosition(row, col){
    var x1, y1, x2, y2, x3, y3, x4, y4;
    var x5, y5, x6, y6, x7, y7, x8, y8;
    
    /* point 1*/
    x1 = this.vp1X - (this.viewCol - col + 1/2) * this.actCubeSize * this.getScale(row);
    y1 = this.vp1Y+(this.height-this.vp1Y)*this.getScale(row)
    this.point1 = [x1,y1];
    
    /* point 2 */
    x2 = this.vp1X-(this.viewCol-col-1/2)*this.actCubeSize*this.getScale(row);
    y2 = this.vp1Y+(this.height-this.vp1Y)*this.getScale(row);
    this.point2 = [x2,y2];
    
    /* point 3 */
    x3 = this.vp1X-(this.viewCol-col+1/2)*this.actCubeSize*this.getScale(row+1);
    y3 = this.vp1Y+(this.height-this.vp1Y)*this.getScale(row+1);
    this.point3 = [x3,y3];
    
    /* point 4*/
    x4 = this.vp1X-(this.viewCol-col-1/2)*this.actCubeSize * this.getScale(row+1);
    y4 = this.vp1Y+(this.height-this.vp1Y)*this.getScale(row+1);
    this.point4 = [x4,y4];
    
    /* point 5 */
    x5 = x1;
    y5 = y2-this.initCubeHeight * this.getScale(row);
    this.point5 = [x5,y5];
    
    /* point 6 */
    x6 = x2
    y6 = y2-this.initCubeHeight*this.getScale(row);
    this.point6 = [x6,y6];
    
    /* point 7 */
    x7 = x3;
    y7 = y4-this.initCubeHeight*this.getScale(row+1);
    this.point7 = [x7,y7];
    
    /* point 8 */
    x8 = x4;
    y8 = y4-this.initCubeHeight*this.getScale(row+1);
    this.point8 = [x8,y8];
}

function drawGround(){
    for (row = 0; row < this.mapWall.length; row ++){
        for (col = 0; col < this.mapWall[0].length; col++){
            
            if (this.mapRoad[row][col] == 1
                && (this.playerD + this.stepSize*(this.viewRow-row-1)>0)){
                    this.getGridPosition(row,col);
                    this.drawGroundCell(this.point1,this.point2,
                        this.point3,this.point4);
            }
            if (this.mapRoad[row][col]==2
                && (this.playerD+this.stepSize*(this.viewRow-row-1)>0)){
                    this.getGridPosition(row,col);
                    this.randomGetPosition();
                    this.randomGetWaterColor();
                    this.drawWaterCell(this.point1,this.point2,
                        this.point3,this.point4);
            }

        }
    }
}

function drawGroundCell(x1, x2, x3, x4){
    var Color1, Color2, Color3, Color4, Color5, Color6, lineW;
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;
    var p11, p12, p13, p14, p15, p16;
    Color1 = 'rgb(217,206,193)';
    Color2 = 'rgb(205,193,181)';
    Color3 = 'rgb(194,181,167)';
    Color4 = 'rgb(182,171,152)';
    Color5 = 'rgb(170,155,137)';
    Color6 = 'rgb(155,143,121)';
    lineW = Math.abs(x4[0]-x3[0])/30;
    
    /* get coordinate of the polygons */
    p1=this.getGroundCellPosition(x1,x2,x3,x4,0,1);
    p2=this.getGroundCellPosition(x1,x2,x3,x4,1,0);
    p3=this.getGroundCellPosition(x1,x2,x3,x4,9,0);
    p4=this.getGroundCellPosition(x1,x2,x3,x4,10,1);
    p5=this.getGroundCellPosition(x1,x2,x3,x4,10,9);
    p6=this.getGroundCellPosition(x1,x2,x3,x4,9,10);
    p7=this.getGroundCellPosition(x1,x2,x3,x4,1,9);
    p8=this.getGroundCellPosition(x1,x2,x3,x4,0,8);

    p9=this.getGroundCellPosition(x1,x2,x3,x4,1,2);
    p10=this.getGroundCellPosition(x1,x2,x3,x4,2,1);
    p11=this.getGroundCellPosition(x1,x2,x3,x4,6,1);
    p12=this.getGroundCellPosition(x1,x2,x3,x4,7,2);
    p13=this.getGroundCellPosition(x1,x2,x3,x4,7,7);
    p14=this.getGroundCellPosition(x1,x2,x3,x4,6,8);
    p15=this.getGroundCellPosition(x1,x2,x3,x4,2,8);
    p16=this.getGroundCellPosition(x1,x2,x3,x4,1,7);
    
    /* create surface of a given cell */
    create_polygon([p1, p2, p10, p9], Color2);
    create_polygon([p2, p3, p11, p10], Color4);
    create_polygon([p8, p1, p9, p16], Color1);
    create_polygon([p9,p10,p11,p12,p13,p14,p15,p16], Color3);
    create_polygon([p7,p8,p16,p15], Color2);
    create_polygon([p12,p11,p3,p4], Color5);
    create_polygon([p13,p12,p4,p5], Color6);
    create_polygon([p15,p14,p6,p7], Color4);
    create_polygon([p14,p13,p5,p6], Color5);
}

function getGroundCellPosition(x1, x2, x3, x4, row, col){
    var ny1, ny2, nx1, nx2, x, y;
    ny1 = x1[1]+row/10*(x3[1]-x1[1]);
    ny2 = x2[1]+row/10*(x4[1]-x2[1]);
    nx1 = x1[0]+row/10*(x3[0]-x1[0]);
    nx2 = x2[0]+row/10*(x4[0]-x2[0]);
    x = nx1+col/9*(nx2-nx1);
    y = ny1+col/9*(ny2-ny1);
    return [x,y];
}

function mapInit(){
    this.mapWall = [[3,1,1,1,1,1,1,1,1,1,1,1,3],
                        [3,1,0,0,0,0,5,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,0,0,0,0,0,0,0,0,0,1,3],
                        [3,1,1,0,0,0,0,0,0,0,1,1,3],
                        [3,1,1,1,1,1,4,1,1,1,1,1,3],
                        [3,0,1,0,1,0,0,0,1,0,1,0,3],
                        [3,0,0,0,0,0,0,0,0,0,0,0,3],
                        [3,3,3,3,3,3,0,3,3,3,3,3,3]];
        
    this.mapRoad = [[0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,0,0,0,0,0,1,1,1,1,1,0,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0],
                        [0,2,0,2,0,1,1,1,0,2,0,2,0],
                        [0,2,2,2,2,2,1,2,2,2,2,2,0],
                        [0,0,0,0,0,0,1,0,0,0,0,0,0]];
}

function drawWaterCell(x1, x2, x3, x4){
    var lineW = Math.abs(x4[0] - x3[0])/30;
    var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;
    var p11, p12, p13, p14, p15;
    p1=this.getWaterCellPosition(x1,x2,x3,x4,this.p1Posi[0],this.p1Posi[1]);
    p2=this.getWaterCellPosition(x1,x2,x3,x4,this.p2Posi[0],this.p2Posi[1]);
    p3=this.getWaterCellPosition(x1,x2,x3,x4,this.p3Posi[0],this.p3Posi[1]);
    p4=this.getWaterCellPosition(x1,x2,x3,x4,this.p4Posi[0],this.p4Posi[1]);
    p5=this.getWaterCellPosition(x1,x2,x3,x4,this.p5Posi[0],this.p5Posi[1]);
    p6=this.getWaterCellPosition(x1,x2,x3,x4,this.p6Posi[0],this.p6Posi[1]);
    p7=this.getWaterCellPosition(x1,x2,x3,x4,this.p7Posi[0],this.p7Posi[1]);
    p8=this.getWaterCellPosition(x1,x2,x3,x4,this.p8Posi[0],this.p8Posi[1]);
    p9=this.getWaterCellPosition(x1,x2,x3,x4,this.p9Posi[0],this.p9Posi[1]);

    p10=this.getWaterCellPosition(x1,x2,x3,x4,5,7);
    p11=this.getWaterCellPosition(x1,x2,x3,x4,2,7);

    p12=this.getWaterCellPosition(x1,x2,x3,x4,0,0);
    p13=this.getWaterCellPosition(x1,x2,x3,x4,0,7);
    p14=this.getWaterCellPosition(x1,x2,x3,x4,10,0);
    p15=this.getWaterCellPosition(x1,x2,x3,x4,10,7);
    
    create_polygon([p12,p13,p2,p1], this.A1Colr);
    create_polygon([p12,p1,p3,p9], this.A2Colr);
    create_polygon([p1,p2,p4,p3], this.A3Colr);
    create_polygon([p2,p13,p11,p4], this.A4Colr);
    create_polygon([p9,p3,p5,p14], this.A5Colr);
    create_polygon([p3,p4,p6,p5], this.A6Colr);
    create_polygon([p4,p11,p10,p6], this.A7Colr);
    create_polygon([p5,p8,p7,p14], this.A8Colr);
    create_polygon([p5,p6,p8], this.A9Colr);
    create_polygon([p6,p10,p15,p8], this.A10Colr);
    create_polygon([p7,p8,p15], this.A11Colr);
    
}

function randomGetWaterColor(){
    var color1, color2, color3, color4, color5, color6;
    color1 = 'rgb(254,254,254)';
    color2 = 'rgb(169,219,246)';
    color3 = 'rgb(9,157,221)';
    color4 = 'rgb(55,99,172)';
    color5 = 'rgb(157,215,201)';
    color6 = 'rgb(7,174,164)';
    waterColorSet1 =  [ //(254,254,254),
                      'rgb(201,233,230)',
                      'rgb(174,221,227)','rgb(145,215,227)']; //light
    waterColorSet2 =  ['rgb(76,198,222)','rgb(1,158,209)',
                       'rgb(4,132,195)','rgb(0,113,173)']; //mid
    waterColorSet3 =  ['rgb(16,77,150)', 'rgb(37,62,142)',
                       'rgb(48,48,136)']; //dark
    
    this.A1Colr = random_choice(waterColorSet2); 
    this.A2Colr = random_choice(waterColorSet3);
    this.A3Colr = random_choice(waterColorSet1);
    this.A4Colr = random_choice(waterColorSet2);
    this.A5Colr = random_choice(waterColorSet2);
    this.A6Colr = random_choice(waterColorSet3);
    this.A7Colr = random_choice(waterColorSet2);
    this.A8Colr = random_choice(waterColorSet2);
    this.A9Colr = random_choice(waterColorSet1);
    this.A10Colr = random_choice(waterColorSet2); 
    this.A11Colr = random_choice(waterColorSet3);
    
}

function randomGetPosition(){
    this.p1Posi = random_choice([[1,1],[1,2],[1,3],
                                    [2,1],[2,2],[2,3],
                                    [3,1],[3,2],[3,3]]);
    this.p2Posi = random_choice([
                                [1,4],[1,5],[1,6],
                                [2,4],[2,5],[2,6]]);
    this.p3Posi = random_choice([[4,1],[4,2],[4,3],
                                [5,1],[5,2],[5,3],
                                [6,1],[6,2],[6,2]]);
    this.p4Posi = random_choice([[3,4],[3,5],[3,6],
                                [4,4],[4,5],[4,6],
                                [5,4],[5,5],[5,6]]);
    this.p5Posi = random_choice([[7,1],[7,2],[7,3],
                                [8,1],[8,2],[8,3],
                                [9,1],[9,2],[9,3]]);
    this.p6Posi = random_choice([[6,4],[6,5],[6,6],
                                [7,4],[7,5],[7,6],
                                [8,4],[8,5],[8,6]]);
    this.p7Posi = random_choice([[10,1],[10,2],[10,3]]);
    this.p8Posi = random_choice([[9,4],[9,5],[9,6]]);
    this.p9Posi = random_choice([[5,0],[6,0],[7,0],
                                [8,0],[9,0],[1,0],
                                [2,0],[3,0],[4,0]]);
}

function getWaterCellPosition(x1, x2, x3, x4, row, col){
    var ny1, ny2, nx1, nx2, x, y;
    ny1 = x1[1]+row/10*(x3[1]-x1[1]);
    ny2 = x2[1]+row/10*(x4[1]-x2[1]);
    nx1 = x1[0]+row/10*(x3[0]-x1[0]);
    nx2 = x2[0]+row/10*(x4[0]-x2[0]);
    x = nx1+col/7*(nx2-nx1);
    y = ny1+col/7*(ny2-ny1);
    return [x,y];
}

function drawStoneWallLight(x1, x2, x3, x4){
    var fillColor, lineColor, lightC;
    fillColor = 'rgb(255,132,91)';
    lineColor = 'rgb(232,99,100)';
    lightC = 'rgb(245,164,111)';
    
    this.drawStoneWallCell1(x1, x2, x3, x4, fillColor, lineColor, lightC);
    this.drawStoneWallCell2(x1, x2, x3, x4, fillColor, lineColor, lightC);
}

function drawStoneWallDark(x1, x2, x3, x4){
    var fillColor, lineColor, lightC;
    fillColor = 'rgb(210,71,68)';
    lineColor = 'rgb(196,61,59)';
    lightC = 'rgb(254,113,104)';
    
    this.drawStoneWallCell1(x1, x2, x3, x4, fillColor, lineColor, lightC);
    this.drawStoneWallCell2(x1, x2, x3, x4, fillColor, lineColor, lightC);
}

function drawStoneWallMid(x1, x2, x3, x4){
    var fillColor, lineColor, lightC;
    fillColor = 'rgb(252,111,104)';
    lineColor = 'rgb(216,81,78)';
    lightC = 'rgb(245,155,129)';
    
    this.drawStoneWallCell1(x1, x2, x3, x4, fillColor, lineColor, lightC);
    this.drawStoneWallCell2(x1, x2, x3, x4, fillColor, lineColor, lightC);
}

function drawStoneWallCell1(x1, x2, x3, x4, color1, color2, color3){
    
    var p0, p1, px0, py0, px1, py1;
    var fillcolor = color1;
    create_polygon([x1,x2,x4,x3], fillcolor);
    
    /* determining color and width */
    
    var outlinecolor = color2;
    var highlightColor = 'rgb(209,196,185)';
    var lightColor = color3; 
    var linewidth = Math.ceil((x4[0]-x3[0])/50); //60 is arbitary,can set to any size
    
    for (row = 0; row < 4; row++){
        p0 = this.getCellPosition(x1,x2,x3,x4,row,0);
        p1 = this.getCellPosition(x1,x2,x3,x4,row,4);
        px0 = p0[0]; py0 = p0[1];
        px1 = p1[0]; py1 = p1[1];
        create_line(px0,py0+linewidth,px1-linewidth,py1+linewidth, 
                   linewidth, lightColor);
        create_line(px0, py0, px1, py1, 
                   linewidth, outlinecolor);
    }
    
    p0 = this.getCellPosition(x1,x2,x3,x4,4,0);
    p1 = this.getCellPosition(x1,x2,x3,x4,4,4);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0+linewidth,py0,px1+linewidth,py1, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,0,2);
    p1 = this.getCellPosition(x1,x2,x3,x4,1,2);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0+linewidth,py0,px1+linewidth,py1, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,1,1);
    p1 = this.getCellPosition(x1,x2,x3,x4,2,1);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0+linewidth,py0,px1+linewidth,py1, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,1,3);
    p1 = this.getCellPosition(x1,x2,x3,x4,2,3);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0+linewidth,py0,px1+linewidth,py1, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,2,2);
    p1 = this.getCellPosition(x1,x2,x3,x4,3,2);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0+linewidth,py0,px1+linewidth,py1, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,3,1);
    p1 = this.getCellPosition(x1,x2,x3,x4,4,1);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0+linewidth,py0,px1+linewidth,py1, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,3,3);
    p1 = this.getCellPosition(x1,x2,x3,x4,4,3);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0+linewidth,py0,px1+linewidth,py1, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
  
}

function drawStoneWallCell2(x1, x2, x3, x4, color1, color2, color3){
    return;
    var fillcolor = color1;
    var outlinecolor = color2;
    var lightColor = color3;
    var linewidth = Math.ceil((x4[0]-x3[0])/50);
    
    var p0 = this.getCellPosition(x1,x2,x3,x4,0,0);
    var p1 = this.getCellPosition(x1,x2,x3,x4,1,0);
    var px0 = p0[0]; var py0 = p0[1];
    var px1 = p1[0]; var py1 = p1[1];
    create_line(px0,py0+linewidth,px1-linewidth,py1+linewidth, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,0,4);
    p1 = this.getCellPosition(x1,x2,x3,x4,1,4);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0,py0+linewidth,px1-linewidth,py1+linewidth, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,2,0);
    p1 = this.getCellPosition(x1,x2,x3,x4,3,0);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0,py0+linewidth,px1-linewidth,py1+linewidth, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
    
    p0 = this.getCellPosition(x1,x2,x3,x4,2,4);
    p1 = this.getCellPosition(x1,x2,x3,x4,3,4);
    px0 = p0[0]; py0 = p0[1];
    px1 = p1[0]; py1 = p1[1];
    create_line(px0,py0+linewidth,px1-linewidth,py1+linewidth, 
               linewidth, lightColor);
    create_line(px0, py0, px1, py1, 
               linewidth, outlinecolor);
}

function stoneWallDecoCellPosiMid(x, y, w){
    return [[x+w,y-2*w],[x+w,y-w],[x+2*w,y-w],[x+2*w,y],
                [x-2*w,y],[x-2*w,y-w],[x-w,y-w],[x-w,y-2*w]];
}

function stoneWallDecoCellPosiLeft(x,y,w){
    return [[x,y-2*w],[x,y],[x-2*w,y],[x-2*w,y-w],[x-w,y-w],[x-w,y-2*w]];
}
        
function stoneWallDecoCellPosiRight(x,y,w){
    return [[x+w,y-2*w],[x+w,y-w],[x+2*w,y-w],[x+2*w,y],[x,y],[x,y-2*w]];
}
        
function getCellPosition(x1,x2,x3,x4,row,col){
    var ny1, ny2, nx1, nx2, x, y;
    ny1 = x1[1]+row/4*(x3[1]-x1[1]);
    ny2 = x2[1]+row/4*(x4[1]-x2[1]);
    nx1 = x1[0]+row/4*(x3[0]-x1[0]);
    nx2 = x2[0]+row/4*(x4[0]-x2[0]);
    x = nx1+col/4*(nx2-nx1);
    y = ny1+col/4*(ny2-ny1);
    return [x,y];
}
        