import { Round,drawPixel } from "./CaculateHandle.js"; //call function

function drawLine(x1, y1, x2, y2){ //viet bang thuat toan Bresenham
    var c2, c, Dx, Dy, x, y,p;
    Dx = Math.abs(x2 - x1);
    Dy = Math.abs(y2 - y1);
    c = Dx - Dy;
    c2 = 2*c;
    x = x1;
    p=2*Dy-Dx;
    y = y1;
     
    var x_unit = 1, y_unit = 1;
     
    if (x2 - x1 < 0)
        x_unit = -x_unit;
    if (y2 - y1 < 0)
        y_unit = -y_unit;
 
    drawPixel(x, y);
     
    if (x1 == x2)   // duong thang dung
    {
        while (y != y2)
        {
           
            y += y_unit;
            drawPixel(x, y);
        }
    }
     
    else if (y1 == y2)  // duong ngang
    {
        while (x != x2)
        {
            
            x += x_unit;
            drawPixel(x, y);
        }
    }
     
    else if (x1 != x2 && y1 != y2)  // duong xien
    {
        if((Math.abs(y2-y1))<=25)
        {
            while(x != x2){
                if (p<0) p += 2*Dy;
                else{
                    p += 2*(Dy-Dx);
                    y += y_unit;
                }
                x += x_unit;
                drawPixel(x, y);
            }  
        }
        else
        {
            if(x2>=x1)
            {
                var sign=5;
                (y2>y1)? sign=5:sign=-5;
                while(!(x == x2+5|| y==y2))
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
                    drawPixel(x, y);
                }
            }
            if(x2<x1)
            {
                var sign=5;
                (y2>y1)? sign=+5:sign=-5;
                while(!(x == x2-5 || y==y2))
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
                    drawPixel(x, y);
                }
            }
        }
        
       
      
    }
}

export default drawLine; //for other using