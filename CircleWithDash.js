import { Round } from "./CaculateHandle.js";
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');
function CircleDash( xc, yc, x, y, length)
{//
   if(length % 40 <= 15)
    {
        ctx.fillRect(xc+x,yc+y, 4, 4);
        ctx.fillRect(xc-x,yc+y, 4, 4);
        ctx.fillRect(xc+x,yc-y, 4, 4);
        ctx.fillRect(xc-x,yc-y, 4, 4);
        ctx.fillRect(xc+y,yc+x, 4, 4);
        ctx.fillRect(xc-y,yc+x, 4, 4);
        ctx.fillRect(xc+y,yc-x, 4, 4);
        ctx.fillRect(xc-y,yc-x, 4, 4);
            // ctx.fillRect(xc+x, yc+y, 4, 4);
            // ctx.fillRect(xc-x, yc+y, 4, 4);
            // ctx.fillRect(xc+x, yc-y, 4, 4);
            // ctx.fillRect(xc-x, yc-y, 4, 4);
            // ctx.fillRect(xc+y, yc+x, 4, 4);
            // ctx.fillRect(xc-y, yc+x, 4, 4);
            // ctx.fillRect(xc+y, yc-x, 4, 4);
            // ctx.fillRect(xc-y, yc-x, 4, 4);
    }
  return length+=5;
}

var DrawCirleWithDash = function (xc, yc, radius) {
  var x = 0;
  var length=0;
  var y = radius;
  var d=3-2*radius;
  length= CircleDash(xc,yc,x,y, length)
  while (y >= x)
    {
        // for each pixel we will
        // draw all eight pixels      
        x+=5;
        // check for decision parameter
        // and correspondingly
        // update d, x, y
        if (d > 0)
        {
            y-=5;
            d = d + 4*(x - y)+ 10;
        }
        else       
        {
            d = d + 4 * x+ 6;
        }
            
        length= CircleDash(xc, yc, x, y, length);
        
    }
};
 export default DrawCirleWithDash;