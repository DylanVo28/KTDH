import { drawPixel } from "./CaculateHandle.js"; //call function

function drawLine(x1, y1, x2, y2){ //viet bang thuat toan Bresenham
    var x, y, Dx, Dy, p;
    Dx = Math.abs(x2 - x1);
    Dy = Math.abs(y2 - y1);
    p = 2*Dy - Dx;
    x = x1;
    y = y1;
 
    var x_unit = 1, y_unit = 1;
 
    //xét trường hợp để cho y_unit và x_unit để vẽ tăng lên hay giảm xuống
    if (x2 - x1 < 0)
        x_unit = -x_unit;
    if (y2 - y1 < 0)
        y_unit = -y_unit;
 
    if (x1 == x2)   // trường hợp vẽ đường thẳng đứng
    {
        while (y != y2+1)
        {
            delay(10);
            y += y_unit;
            drawPixel(x, y);
        }
    }
 
    else if (y1 == y2)  // trường hợp vẽ đường ngang
    {
        while (x != x2+1)
        {
            delay(10);
            x += x_unit;
            drawPixel(x, y);
        }
    }
            // trường hợp vẽ các đường xiên
    else{          
        drawPixel(x, y);
        while(x != x2){
            delay(10);
            if (p<0) p += 2*Dy;
            else{
                p += 2*(Dy-Dx);
                y += y_unit;
            }
            x += x_unit;
            drawPixel(x, y);
        }
    }
}

export default drawLine; //for other using