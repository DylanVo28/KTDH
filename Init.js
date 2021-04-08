import {drawPixel} from './CaculateHandle.js'
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
const initCoordinate=(width,height)=>{
    ctx.canvas.width = width
    ctx.canvas.height = height
    // // vẽ lưới pixel
    for (let x=0;x<=width;x+=5) {
        ctx.strokeStyle = 'gray'
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
        // ctx.fillRect(x, y, 2, 2);
    }
    for (let y=0;y<=height;y+=5) {
        ctx.beginPath();
        ctx.strokeStyle= 'gray';
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
        // ctx.fillRect(x, y, 2, 2);
    }
    // Vẽ trục Ox Oy
    ctx.beginPath();
    ctx.strokeStyle = "blue"
    ctx.moveTo(width/2, 0);
    ctx.lineTo(width/2, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, height/2);
    ctx.lineTo(width, height/2);
    ctx.stroke();
    ctx.fillStyle="red"

//     for(var x=0;x<=width;x+=10){
//     ctx.fillRect(x, height/2-4, 1, 8);
//     }
//     for(var y=0;y<=height;y+=10){
//         ctx.fillRect(width/2-4, y, 8, 1);
//         }
}
export {initCoordinate}
    