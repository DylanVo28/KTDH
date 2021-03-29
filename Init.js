var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
const initCoordinate=(width,height)=>{
    ctx.canvas.width = width
    ctx.canvas.height = height
    for (let x=0;x<=width;x+=5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y=0;y<=height;y+=5) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.strokeStyle = "blue"
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height/2);
    ctx.lineTo(width, height/2);
    ctx.stroke();
}
export {initCoordinate}
    