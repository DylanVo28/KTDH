
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
function  Round(x){
    if(x%5>=3)
    {
        return x=x+5-x%5;
    }
    else{
        return  x=x-x%5;
    }
 }

 function RealX(x)
 {
     if (x>=640)
     return x = -(128 - x/5)
     else
     return x =(x-640)/5
 }
 function RealY(y)
 {
     if (y>=300)
     return y = -((y-300)/5)
     else
     return y = 60 - y/5

 }
export {Round,getPosX,getPosY,drawPixel,RealX,RealY}