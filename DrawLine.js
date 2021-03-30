import { drawPixel } from "./CaculateHandle";

function drawLine(x1, y1, x2, y2)
{
    var dx = x2 - x1; var sx = 1;
    var dy = y2 - y1; var sy = 1;
    
    if (dx < 0)    {
        sx = -1;
        dx = -dx;
    }
    if (dy < 0)    {
        sy = -1;
        dy = -dy;
    }
    
    dx = dx << 1;
    dy = dy << 1;
    this.drawPixel(x1, y1);
    if (dy < dx)
    {    
        var fraction = dy - (dx>>1);
        while (x1 != x2)
        {
            if (fraction >= 0)
            {
                y1 += sy;
                fraction -= dx;
            }
            fraction += dy;
            x1 += sx;
            drawPixel(x1, y1);
        }
    } 
    else 
    {
        var fraction = dx - (dy>>1);        
        while (y1 != y2)
        {
            if (fraction >= 0)
            {
                x1 += sx;
                fraction -= dy;
            }
            fraction += dx;
            y1 += sy;
            drawPixel(x1, y1);
        }    
    }
}