
import { Round } from "./CaculateHandle.js";

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');

function midptellipse(rx, ry, xc, yc){

    var dx, dy, d1, d2, x, y;
    x = 0;
    y = ry;

// Initial decision parameter of region 1
    d1 = (ry * ry) - (rx * rx * ry) + (0.25 * rx * rx);
    dx = 2 * ry * ry * x;
    dy = 2 * rx * rx * y;
    var count=0;
    var count2=0
    
    while (dx < dy){
            
           
            if(x%5==0){
                ctx.fillRect(Round(x + xc),Round( y + yc), 4, 4);
            ctx.fillRect(Round(-x + xc), Round(y + yc), 4, 4);
                count++
                if(count%4!=0){
                    ctx.fillRect(Round(x + xc), Round(-y + yc), 4, 4);

                    ctx.fillRect(Round(-x + xc),Round(-y + yc), 4, 4);
                }
               
            }
            
            
  


// Print points based on 4-way symmetry
    // console.log("("+ (x + xc)+ ","+ (y + yc)+ ")");
    // console.log("("+(-x + xc)+","+ (y + yc)+ ")");
    // console.log("("+(x + xc)+","+ (-y + yc)+")");
    // console.log("("+(-x + xc)+ ","+(-y + yc)+ ")");

// Checking and updating value of
// decision parameter based on algorithm
    if (d1 < 0) 
    {
    x++;
    dx = dx + (2 * ry * ry);
    d1 = d1 + dx + (ry * ry);
    }
    else
    {
    x++;
    y--;
    dx = dx + (2 * ry * ry);
    dy = dy - (2 * rx * rx);
    d1 = d1 + dx - dy + (ry * ry);
    }
    }

    // Decision parameter of region 2
    d2 = (((ry * ry) * ((x + 0.5) * (x + 0.5))) +
    ((rx * rx) * ((y - 1) * (y - 1))) - 
    (rx * rx * ry * ry)); 

// Plotting points of region 2
while (y >= 0) {
    
    if(y%5==0){
        ctx.fillRect(Round(x + xc),Round(y + yc), 4, 4);
    ctx.fillRect(Round(-x + xc),Round(y + yc), 4, 4);
        count2++
        if(count2%4!=0){
            ctx.fillRect(Round(x + xc),Round(-y + yc), 4, 4);
            ctx.fillRect(Round(-x + xc),Round(-y + yc), 4, 4);
        }
       
    }
    


// // printing points based on 4-way symmetry
// console.log("("+ (x + xc)+ ","+( y + yc)+ ")");
// console.log("("+ (-x + xc)+ ","+( y + yc)+ ")");
// console.log("("+ (x + xc)+ ","+ (-y + yc)+ ")");
// console.log("("+ (-x + xc) +","+ (-y + yc)+ ")");

// Checking and updating parameter
// value based on algorithm
if (d2 > 0) {
y--;
dy = dy - (2 * rx * rx);
d2 = d2 + (rx * rx) - dy;
}
else {
y--;
x++;
dx = dx + (2 * ry * ry);
dy = dy - (2 * rx * rx);
d2 = d2 + dx - dy + (rx * rx);
}
}
}
export default midptellipse;
