import {getPosX,getPosY,drawPixel} from "./CaculateHandle.js"
import {initCoordinate} from './Init.js'
import drawLine from './DrawLine.js'
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
let w = 1280
let h = 600

initCoordinate(w,h)
// canvas.onmousedown =  function (e) {
//     const posX = getPosX(e);
//     const posY = getPosY(e)
//     ctx.fillStyle = "red";
//     ctx.fillRect(posX, posY,5,5)
// }

var checkClickFirst=false;
var pointPrev={
    x:0,
    y:0
}
canvas.onmousedown=function(e){
    const posX=getPosX(e)
    const posY=getPosY(e)
    if(!checkClickFirst){
        pointPrev={
            x:posX,
            y:posY
        }
     checkClickFirst=true;
    }
    else{
        
        const point={
            x:posX,
            y:posY
        }
        console.log(pointPrev.x+" "+pointPrev.y+" "+point.x+" "+point.y)
        drawLine(pointPrev.x,pointPrev.y,point.x,point.y)
        pointPrev=point
    }
    
}