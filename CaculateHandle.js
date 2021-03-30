
var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")
const getPosX=(e)=>{
    return  e.clientX-canvas.getBoundingClientRect().left;
}
const getPosY=(e)=>{
    return e.clientY-canvas.getBoundingClientRect().top
}
const drawPixel = (x, y) => {
    ctx.fillStyle="red"
    ctx.fillRect(x, y, 2, 2);
};
export {getPosX,getPosY,drawPixel}