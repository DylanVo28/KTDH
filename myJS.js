import {getPosX,getPosY,drawPixel} from "./CaculateHandle.js"
    var canvas = document.getElementById("canvas")
    var ctx = canvas.getContext("2d")
    let w = 1280
    let h = 600
    ctx.canvas.width = w
    ctx.canvas.height = h
    for (let x=0;x<=w;x+=5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
    }
    for (let y=0;y<=h;y+=5) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }
    canvas.onmousedown =  function (e) {
        const posX = getPosX(e);
        const posY = getPosY(e)
        ctx.fillStyle = "red";
        ctx.fillRect(posX, posY,5,5)
    }


// export {canvas,ctx,w,h}