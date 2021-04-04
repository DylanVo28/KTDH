import {getPosX,getPosY,drawPixel,Round,RealX,RealY} from "./CaculateHandle.js"
import {initCoordinate} from './Init.js'
import drawLine from './DrawLine.js'
import DrawDashWithDot from './DrawDashWithDot.js'
import DrawDash from "./DrawDash.js"

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
let w = 1280
let h = 600
initCoordinate(w,h)
var buttons=document.getElementsByClassName('btn');
for (var i=0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        optionSelect(event.srcElement.value)
    }
};

function optionSelect(action){
    switch(action){
            case 'CLICK_ELEMENT':
                canvas.onmousedown =  function (e) {
                    const posX = Round(getPosX(e));
                    const posY = Round(getPosY(e));
                    ctx.fillStyle = "red";
                    ctx.fillRect(posX, posY,5,5)
                    console.log(posX,posY)
                    console.log("Tọa độ điểm : (" + RealX(posX) + "," + RealY(posY) + ")")
                }
                break;
            case 'DRAW_LINE':
                var checkClickFirst=false;
                var pointPrev={
                    x:0,
                    y:0
                }
                canvas.onmousedown=function(e){
                    const posX=Round(getPosX(e))
                    const posY=Round(getPosY(e))
                    ctx.fillStyle = "red";
                    ctx.fillRect(posX, posY,6,6)
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
                        console.log(pointPrev.x,pointPrev.y,point.x,point.y)
                        drawLine(pointPrev.x,pointPrev.y,point.x,point.y)
                        pointPrev=point
                    }
                    
                }
                break;  
            
        }
}

