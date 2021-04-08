

import { Round,drawPixel } from "./CaculateHandle.js"; //call function
function DashWithDot(length,x,y)
{
    
    if((length%10 <=5 && length%10 >= 2 ) || length%10==8)
    {
        drawPixel(x,y);
    }
    
 return length+=1;          
}

function DrawDashWithDot(x1, y1, x2, y2){ //viet bang thuat toan Bresenham
    var c2, c, Dx, Dy, x, y,p,length;
    Dx = Math.abs(x2 - x1);
    Dy = Math.abs(y2 - y1);
    c = Dx - Dy;
    c2 = 2*c;
    x = x1;
    p=2*Dy-Dx;
    y = y1;
    length = 0 
    var x_unit = 5, y_unit = 5;
     
    if (x2 - x1 < 0)
        x_unit = -x_unit;
    if (y2 - y1 < 0)
        y_unit = -y_unit;
 
  length = DashWithDot(length,x-2, y-2);
     
    if (x1 == x2)   // duong thang dung
    {
        while (y != y2)
        {
           
            y += y_unit;
          length = DashWithDot(length,x-2, y-2);
        }
    }
     
    else if (y1 == y2)  // duong ngang
    {
        while (x != x2)
        {
            
            x += x_unit;
          length = DashWithDot(length,x-2, y-2);
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
              length = DashWithDot(length,x-2, y-2);
            }  
        }
        else
        {
            if(x2>=x1)
            {
                // var sign=5;
                // (y2>y1)? sign=5:sign=-5;
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
                  length = DashWithDot(length,x-2, y-2);
                }
            }
            if(x2<x1)
            {
                // var sign=5;
                // (y2>y1)? sign=+5:sign=-5;
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
                  length = DashWithDot(length,x-2, y-2);
                }
            }
        }
        
       
      
    }
}

export default DrawDashWithDot; //for other using

