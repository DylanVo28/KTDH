import { drawPixel } from "./CaculateHandle.js"; //call function

function drawREC(x1, y1, x2, y2){ //viet bang thuat toan Bresenham
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    // var x,y;
    // x = x1;
    // y = y1;
    var c2, c, Dx, Dy, x, y,xx,yy;
    Dx = Math.abs(x2 - x1);
    Dy = Math.abs(y2 - y1);
    c = Dx - Dy;
    c2 = 2*c;
    x = x1;
    y = y1;
    xx=x2;
    yy=y2; 
    var x_unit = 1, y_unit = 1;
     
    if (x2 - x1 < 0)
        x_unit = -x_unit;
    if (y2 - y1 < 0)
        y_unit = -y_unit;
 
    drawPixel(x, y);
    while(y!=y2){  //vẽ thẳng đứng
        y += y_unit;
        yy-= y_unit
        drawPixel(x, y);
        drawPixel(x2,yy)
    }
    ctx.fillStyle = "red";
    ctx.fillRect(x1, y2,5,5)
    while(x!=x2){ //vẽ đường ngang
        x += x_unit;
        xx -= x_unit;
        drawPixel(x,y1);
        drawPixel(xx,y2)
    }
    ctx.fillStyle = "red";
    ctx.fillRect(x2, y1,5,5)
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    //grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");
    ctx.fillStyle = grd;
    if(x1<x2){
        x=x1
        if(y1<y2) y=y1;
        else y=y2;
    }
    else {
        x=x2;
        if(y1>y2) y=y2;
        else y=y1;
    }
    ctx.fillRect( x+1,y+1, Math.abs(x1-x2), Math.abs(y1-y2) );  
}

export default drawREC; //for other using