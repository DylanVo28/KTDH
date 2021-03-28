var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var drawPixel = (x, y) => {
    ctx.fillRect(x, y, 1, 1);
};