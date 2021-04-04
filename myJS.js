import {getPosX,getPosY,drawPixel} from "./CaculateHandle.js"
import {initCoordinate} from './Init.js'
import drawLine from './DrawLine.js'
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
let w = 1280
let h = 600
var buttons=document.getElementsByClassName('btn');
initCoordinate(w,h)
for (var i=0; i < buttons.length; i++) {
    buttons[i].onclick = function(){
        optionSelect(event.srcElement.value)
    }
};

function optionSelect(action){
    switch(action){
        case 'CLICK_ELEMENT':
            canvas.onmousedown =  function (e) {
                const posX = getPosX(e);
                const posY = getPosY(e)
                ctx.fillStyle = "red";
                ctx.fillRect(posX, posY,5,5)
            }
            break;
        case 'DRAW_LINE':
            var checkClickFirst=false;
            var pointPrev={
                x:0,
                y:0
            }
            canvas.onmousedown=function(e){
                const posX=getPosX(e)
                const posY=getPosY(e)
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
                    drawLine(pointPrev.x,pointPrev.y,point.x,point.y)
                    pointPrev=point
                }
                
            }
            break;
        default :
            alert("Vui lòng chọn tính năng")      
        }
        
}

