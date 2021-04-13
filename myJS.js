import { getPosX, getPosY, drawPixel, Round, RealX, RealY } from "./CaculateHandle.js"
import { initCoordinate } from './Init.js'
import drawLine from './DrawLine.js'
import DrawDashWithDot from './DrawDashWithDot.js'
import DrawDash from "./DrawDash.js"
import drawREC from "./DrawREC.js"
import DrawDashWith2Dots from "./DrawDashWith2Dots.js"
import DrawArrow from "./DrawArrow.js"
import DrawCirle from './DrawCircle.js';
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
let w = 1280
let h = 600
var buttons = document.getElementsByClassName('btn');
initCoordinate(w, h)
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        optionSelect(event.srcElement.value)
    }
};
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
function createElement(posX, posY, e) {
    var node = document.createElement("span");
    var textNode = document.createTextNode(getRandomString(1) + "(" + parseInt(RealX(posX)) + ',' + parseInt(RealY(posY)) + ')')
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    node.appendChild(textNode);
    node.style.top = e.clientY + "px"
    node.style.left = e.clientX + "px"
    node.style.color = "#" + randomColor;
    document.getElementById("wrap").appendChild(node);
}

function optionSelect(action) {
    switch (action) {
        case 'CLICK_ELEMENT':
            canvas.onmousedown = function (e) {
                console.log(e.clientX + " " + e.clientY)

                const posX = Round(getPosX(e));
                const posY = Round(getPosY(e))

                ctx.fillStyle = "red";
                ctx.fillRect(posX - 2, posY - 2, 4, 4)
                createElement(posX, posY, e)
            }
            break;
        case 'DRAW_ARROW':
            var checkClickFirst = false;
            var pointPrev = {
                x: 0,
                y: 0
            }
            canvas.onmousedown = function (e) {
                const posX = Round(getPosX(e))
                const posY = Round(getPosY(e))
                ctx.fillStyle = "red";
                // ctx.fillRect(posX-2, posY-2,4,4)
                if (!checkClickFirst) {
                    pointPrev = {
                        x: posX,
                        y: posY
                    }
                    checkClickFirst = true;
                }
                else {

                    const point = {
                        x: posX,
                        y: posY
                    }
                    // drawLine(pointPrev.x, pointPrev.y, point.x, point.y)
                    DrawArrow(pointPrev.x, pointPrev.y, point.x, point.y)
                    pointPrev = point
                    checkClickFirst = false;
                }
                createElement(posX, posY, e)

            }
            break;
        case 'DRAW_DASH':
            var checkClickFirst = false;
            var pointPrev = {
                x: 0,
                y: 0
            }
            canvas.onmousedown = function (e) {
                const posX = Round(getPosX(e))
                const posY = Round(getPosY(e))
                ctx.fillStyle = "red";
                // ctx.fillRect(posX-2, posY-2,4,4)
                if (!checkClickFirst) {
                    pointPrev = {
                        x: posX,
                        y: posY
                    }
                    checkClickFirst = true;
                }
                else {
                    const point = {
                        x: posX,
                        y: posY
                    }
                    // DrawDash(pointPrev.x, pointPrev.y, point.x, point.y)
                    
                    pointPrev = point
                    checkClickFirst = false;
                }
                createElement(posX, posY, e)

            }
            break;
        case 'DRAW_REC':
            var checkClickFirst = false;
            var pointPrev = {
                x: 0,
                y: 0
            }
            canvas.onmousedown = function (e) {
                const posX = Round(getPosX(e))
                const posY = Round(getPosY(e))
                ctx.fillStyle = "red";
                ctx.fillRect(posX, posY, 4, 4)
                if (!checkClickFirst) {
                    pointPrev = {
                        x: posX,
                        y: posY
                    }
                    checkClickFirst = true;
                }
                else {

                    const point = {
                        x: posX,
                        y: posY
                    }
                    console.log(pointPrev.x, pointPrev.y, point.x, point.y)
                    drawREC(pointPrev.x, pointPrev.y, point.x, point.y)
                    pointPrev = point
                    checkClickFirst = false;
                }
            }
            break;
        case 'DRAW_DASH_WITH_ONE_DOT':
            var checkClickFirst = false;
            var pointPrev = {
                x: 0,
                y: 0
            }
            canvas.onmousedown = function (e) {
                const posX = Round(getPosX(e))
                const posY = Round(getPosY(e))
                ctx.fillStyle = "red";
                // ctx.fillRect(posX-2, posY-2,4,4)
                if (!checkClickFirst) {
                    pointPrev = {
                        x: posX,
                        y: posY
                    }
                    checkClickFirst = true;
                }
                else {
                    const point = {
                        x: posX,
                        y: posY
                    }
                    DrawDashWithDot(pointPrev.x, pointPrev.y, point.x, point.y)
                    pointPrev = point
                    checkClickFirst = false;
                }
                createElement(posX, posY, e)   
            }
            break;
        case 'DRAW_DASH_WITH_TWO_DOTS':   

            var checkClickFirst = false;
            var pointPrev = {
                x: 0,
                y: 0
            }
            canvas.onmousedown = function (e) {
                const posX = Round(getPosX(e))
                const posY = Round(getPosY(e))
                ctx.fillStyle = "red";
                // ctx.fillRect(posX-2, posY-2,4,4)
                if (!checkClickFirst) {
                    pointPrev = {
                        x: posX,
                        y: posY
                    }
                    checkClickFirst = true;
                }
                else {
                    const point = {
                        x: posX,
                        y: posY
                    }
                    DrawDashWith2Dots(pointPrev.x, pointPrev.y, point.x, point.y)
                    pointPrev = point
                    checkClickFirst = false;
                }
                createElement(posX, posY, e)   
            }
            break;
        case 'DRAW_CIRCLE':
            const radius=document.getElementById("inputRadius").value

            canvas.onmousedown = function (e) {
                const posX = getPosX(e)
                const posY = getPosY(e)
                
                ctx.fillStyle = "red";
                DrawCirle(posX,posY,radius)
               
                createElement(posX, posY, e)   
            }
            break;
        default:
            alert("Chức năng chưa cập nhật")
    }

}

