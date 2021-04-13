

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');


function DrawPixel( xc, yc, x, y)
{
    ctx.fillRect(xc+x, yc+y, 4, 4);
    ctx.fillRect(xc-x, yc+y, 4, 4);
    ctx.fillRect(xc+x, yc-y, 4, 4);
    ctx.fillRect(xc-x, yc-y, 4, 4);
    ctx.fillRect(xc+y, yc+x, 4, 4);
    ctx.fillRect(xc-y, yc+x, 4, 4);
    ctx.fillRect(xc+y, yc-x, 4, 4);
    ctx.fillRect(xc-y, yc-x, 4, 4);
}

var DrawCirle = function (xc, yc, radius) {
  var x = 0;
  var y = radius;
  var d=3-2*radius;
  DrawPixel(xc,yc,x,y)
  while (y >= x)
    {
        // for each pixel we will
        // draw all eight pixels
         
        x++;
 
        // check for decision parameter
        // and correspondingly
        // update d, x, y
        if (d > 0)
        {
            y--;
            d = d + 4 * (x - y) + 10;
        }
        else
            d = d + 4 * x + 6;
            DrawPixel(xc, yc, x, y);
    }
};
 export default DrawCirle;