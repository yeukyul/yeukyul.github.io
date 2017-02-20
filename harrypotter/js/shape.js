/* This javascript module includes functions that draw shapes on canvas */
var canvas = document.getElementById("mainCanvas");

function get_context(){
    var context = canvas.getContext("2d");
    return context;
}

/*  
    create_image: create specified image on screen with left top at (x, y)
    img : DOM element
*/
function create_image(x, y, img){
    var context = get_context();
    var zindex = 0.3;
    /* anchor at center */
    context.drawImage(img, 
                      x - img.width * zindex/2, 
                      y - img.height* zindex/2,
                      img.width * zindex,
                      img.height * zindex);
}

/*  
    create_rect: create rectangle at specific (x, y) position
    points: 1-D list of (x, y) vertexes
    
*/
function create_rect(x, y, width, height){
    var context = get_context();
    context.rect(x, y, width, height);
    context.stroke();
}


/*  
    create_line: draw line from (x1, y1) to (x2, y2)
    width: line width
    color: color of line
    optionalParam: optional parameter object list
*/
function create_line(x1, y1, x2, y2, width, color){
    context = get_context();
    context.beginPath();
    
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineWidth = width;
    context.strokeStyle = color;
    context.stroke();
    
    context.closePath();
}

/*  
    create_circle: draw a circle centered at (cx, cy)
    (cx, cy): center point of circle
    r: radius
    width: line width
    fill: fill color of circle
*/
function create_circle(cx, cy, r, width, color){
    var context = get_context();
    context.beginPath();
    context.arc(cx, cy, r ,0,2*Math.PI);
    if (width !== undefined) {
        context.lineWidth = width;
        context.strokeStyle = color;
    }
    context.stroke();
}

/*  
    create_arc: draw a circle centered at (cx, cy)
    (cx, cy): center point of circle
    r: radius
    startAngle: beginning angle of the arc (in radians)
    endAngle: ending angle of the arc (in radians)
    width: line width
    fill: fill color of arc
*/
function create_arc(cx, cy, r, startAngle, endAngle, width, fill){
    var context = get_context();
    context.beginPath();
    context.arc(cx, cy, r, startAngle, endAngle);
    context.stroke();
}

function fill_background(color){
    var context = get_context();
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
}

/* 
 * create_polygon
 * points: a 2D list containing list of [x, y] points 
 */
function create_polygon(points, fill){
    var context, point, i, x, y;
    
    context = get_context();
    context.fillStyle = fill;
    
    point = points[0];
    x = point[0]; y = point[1];
    
    context.beginPath();
    context.moveTo(x, y);
    
    for(i = 0; i < points.length; i++){
        point = points[i];
        x = point[0]; y = point[1];
        context.lineTo(x, y);
    }

    context.closePath();
    context.fill();
};