

import { drawPixel } from "./CaculateHandle.js"; //call function
function DashWithDot(length,x,y)
{
    if((length%13 <=6 && length%13 > 1  ) || length%13==11)
    {
        drawPixel(x,y);
    }
    
 return length+=1;
}
function DrawDashWithDot(x1, y1, x2, y2){ //viet bang thuat toan Bresenham
    var c2, c, Dx, Dy, x, y;
    Dx = Math.abs(x2 - x1);
    Dy = Math.abs(y2 - y1);
    c = Dx - Dy;
    c2 = 2*c;
    x = x1;
    y = y1;
    length=0;

    var x_unit = 1, y_unit = 1;
     
    if (x2 - x1 < 0)
        x_unit = -x_unit;
    if (y2 - y1 < 0)
        y_unit = -y_unit;
 
    length=DashWithDot(length,x,y);
     
    if (x1 == x2)   // duong thang dung
    {
        while (y != y2)
        {
           
            y += y_unit;
            length=DashWithDot(length,x,y);
        }
    }
     
    else if (y1 == y2)  // duong ngang
    {
        while (x != x2)
        {
            
            x += x_unit;
            length=DashWithDot(length,x,y);
        }
    }
     
    else if (x1 != x2 && y1 != y2)  // duong xien
    {
        while(x != x2+1)
        {
           
            c2 =2*c;
            if (c2 > -Dy)    
            {
                c = c - Dy; 
                x = x + x_unit;
            }
            if (c2 < Dx) 
            {
                c = c + Dx; 
                y = y + y_unit; 
            }
            length=DashWithDot(length,x,y);
        }
    }
}

export default DrawDashWithDot; //for other using

