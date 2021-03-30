import {getPosX,getPosY,drawPixel} from "./CaculateHandle.js"
import {initCoordinate} from './Init.js'
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
var pointPrev={
    x:0,
    y:0,
};
let w = 1280
let h = 600
var mouseClick=0;

initCoordinate(w,h)
canvas.onmousedown =  function (e) {
    mouseClick++;
   
    const posX = getPosX(e);
    const posY = getPosY(e);
    if(mouseClick==1){
        pointPrev={
            x:posX,
            y:posY
        }
    }
    ctx.fillStyle = "blue";
    ctx.fillRect(posX, posY,5,5)
    ctx.beginPath();
    ctx.setLineDash([15, 5]);
    ctx.moveTo(pointPrev.x, pointPrev.y);
    ctx.lineTo(posX, posY);
    pointPrev={
        x:posX,
        y:posY
    }
    ctx.lineWidth = 5;
    ctx.stroke();

   
}




