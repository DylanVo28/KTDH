import drawLine from "./DrawLine.js"

function DrawArrow(x1,y1, x2, y2) {
    var headlen =3; // length of head in pixels
    var dx = x2 - x1;
    var dy = y2 -y1;
    var angle = Math.atan2(dy, dx);
    drawLine(x1,y1,x2,y2)
    drawLine(x2,y2,x2 - Math.round(headlen * Math.cos(angle - Math.PI / 6))*10, y2 - Math.round(headlen * Math.sin(angle - Math.PI / 6))*10);
    drawLine(x2,y2,x2 - Math.round(headlen * Math.cos(angle + Math.PI / 6))*10, y2 - Math.round(headlen * Math.sin(angle + Math.PI / 6))*10);
  }

export default DrawArrow; //for other using