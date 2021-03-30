import { drawPixel } from "./CaculateHandle";

function drawLine(xa,ya,xb,yb){
    var dx=Math.abs(xa-xb);
    var dy=Math.abs(ya-yb);
    var p=2*dy-dx;
    var twody=2*dy;
    var twodydx=2*(dy-dx);
    var x,y,xend;

    if(xa>xb)
    {
        x=xb;
        y=yb;
        xend=xa;
    }
    else
    {
        x=xa;
        y=yb;
        xend=xb;
    }
    drawPixel(x,y);
    while(x<xend)
    {
        x++;
        if(p<0)
        {
            p+=twody;
        }
        else
        {
            y++;
            p+=twodydx;
        }
        drawPixel(x,y);
    }
}