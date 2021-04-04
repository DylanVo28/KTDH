
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
    ctx.fillRect(x, y, 1, 1);
};
function  Round(x){
    if(x%5>=3)
    {
        return x+5-x%5;
    }
    else{
        return  x-x%5;
    }

 }
export {Round,getPosX,getPosY,drawPixel}