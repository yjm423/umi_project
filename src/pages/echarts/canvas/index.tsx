import React, { Component, useEffect, useRef } from 'react';

function fillMoon(ctx, d, x, y, R, rot) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((rot * Math.PI) / 180);
  ctx.scale(R, R);
  pathMoon(ctx, d);
  ctx.fillStyle = '#cd853f';
  ctx.fill();
  ctx.restore();
}
function dis(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

function pathMoon(ctx, d) {
  ctx.beginPath();
  ctx.arc(0, 0, 1, 0.5 * Math.PI, 1.5 * Math.PI, true);
  ctx.moveTo(0, -1);
  ctx.arcTo(d, 0, 0, 1, dis(0, -1, d, 0) / d);
  ctx.closePath();
}
const Canvas = () => {
  const ref = useRef(null);
  useEffect(() => {
    var myCanvas = document.getElementById('myCanvas');
    var ctx = myCanvas && myCanvas.getContext('2d');

    ctx.clearRect(0, 0, 250, 250); // 擦除(0,0)位置大小为250x250的矩形，擦除的意思是把该区域变为透明
    ctx.fillStyle = '#dddddd'; // 设置颜色
    ctx.fillRect(10, 10, 240, 240); // 把(10,10)位置大小为240x240的矩形涂色
    // 利用Path绘制复杂路径:
    var path = new Path2D();

    ctx.beginPath();
    ctx.arc(130, 130, 110, 0, Math.PI * 2, true); //圆心x,圆心y,半径r,起始角度0，(False = 顺时针,true = 逆时针)
    ctx.fillStyle = '#FFDD55';
    ctx.strokeStyle = '#cd853f';
    ctx.lineWidth = 3;
    ctx.fill();
    ctx.stroke();
    // ctx.closePath();
    fillMoon(ctx, 7, 130, 140, 70, 90);

    //左眼
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineWidth = 40;
    ctx.moveTo(90, 90);
    ctx.lineTo(90, 102);
    ctx.strokeStyle = 'cd853f';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.moveTo(90, 91);
    ctx.lineTo(90, 101);
    ctx.lineWidth = 38;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(90, 105, 19, 0, Math.PI * 2, true);

    ctx.fillStyle = '#cd853f';
    ctx.fill();
    ctx.closePath();

    //右眼
    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.lineWidth = 40;
    ctx.moveTo(170, 90);
    ctx.lineTo(170, 102);
    ctx.strokeStyle = '#cd853f';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineCap = 'round';
    ctx.moveTo(170, 91);
    ctx.lineTo(170, 101);
    ctx.lineWidth = 38;
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(170, 105, 19, 0, Math.PI * 2, true);

    ctx.fillStyle = '#cd853f';
    ctx.fill();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.arc(130, 120, 90, 20*Math.PI/180, 160*Math.PI/180, false);
    // ctx.moveTo(215, 150);
    // ctx.arcTo( 130, 270, 30, 128,100);
    // // ctx.arc(130, 100, 100, 30*Math.PI/180, 150*Math.PI/180, false);
    // ctx.fillStyle="#cd853f";
    // ctx.stroke();
    // ctx.fill();
    // ctx.closePath();

    // ctx.beginPath();

    // ctx.moveTo(205,135);  //把路径移动到画布中的指定点，不创建线条
    // ctx.arc(130, 135, 75, 0, Math.PI, false);
    // ctx.moveTo(200, 190);
    // ctx.arc(130, 120, 80, 0, Math.PI, false);
    // ctx.lineWidth=1;
    // // ctx.fillStyle="#FFDD55";
    // ctx.stroke();
    // ctx.closePath();
    // // path.moveTo(105, 95);
    // // path.arc(100, 95, 8, 0, Math.PI*2, true);
    // ctx.strokeStyle = '#d2691e';
    // ctx.stroke(path);
  }, []);

  return (
    <canvas ref={ref} id="myCanvas" width="1000px" height="500px">
      canvas
    </canvas>
  );
};
export default Canvas;
