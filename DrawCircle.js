

var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d');

var DrawPixel = function (x, y) {
  ctx.fillRect(x, y, 4, 4);
}

var DrawCirle = function (x0, y0, radius) {
  var x = radius;
  var y = 0;
  var radiusError = 1 - x;
  
  while (x >= y) {
    console.log(x+" "+y)

    DrawPixel(x + x0, y + y0);
    DrawPixel(y + x0, x + y0);
    DrawPixel(-x + x0, y + y0);
    DrawPixel(-y + x0, x + y0);
    DrawPixel(-x + x0, -y + y0);
    DrawPixel(-y + x0, -x + y0);
    DrawPixel(x + x0, -y + y0);
    DrawPixel(y + x0, -x + y0);
    y++;
    
    if (radiusError < 0) {
        radiusError += 2 * y + 1;
    }
    else {
        x--;
        radiusError+= 2 * (y - x + 1);
    }
  }
};
 export default DrawCirle;