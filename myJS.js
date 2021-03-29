import {getPosX,getPosY,drawPixel} from "./CaculateHandle.js"
import {initCoordinate} from './Init.js'
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
let w = 1280
let h = 600
initCoordinate(w,h)
canvas.onmousedown =  function (e) {
    const posX = getPosX(e);
    const posY = getPosY(e)
    ctx.fillStyle = "red";
    ctx.fillRect(posX, posY,5,5)
}

