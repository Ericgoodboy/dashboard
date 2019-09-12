<template>
  <div>
    <canvas id="canvasb"></canvas>
  </div>
</template>

<script>
export default {
  name: "d-star",
  mounted() {
    let canvas = document.getElementById("canvasb");
    let ctx = canvas.getContext("2d");
    let intervlTime = 3;
    const pointNum = 200;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const H = canvas.height;
    const W = canvas.width;
    const R = 2;
    const MaxV = 1;
    const LineLength = 50 * 50;
    function Point(x, y, cx, cy) {
      this.x = x;
      this.y = y;
      this.cx = cx;
      this.cy = cy;
    }
    Point.prototype.move = function() {
      if (this.x <= 0 || this.x >= W) {
        this.cx = -this.cx;
      }
      if (this.y <= 0 || this.y > H) {
        this.cy = -this.cy;
      }
      this.x += this.cx;
      this.y += this.cy;
    };
    Point.prototype.draw = function() {
      var color = ctx.createRadialGradient(
        this.x,
        this.y,
        0,
        this.x,
        this.y,
        R
      );
      color.addColorStop(0, "#9699");
      color.addColorStop(1, "#f9f9");
      ctx.fillStyle = color;
      ctx.save();
      ctx.beginPath(); //开始路径
      ctx.arc(this.x, this.y, R, 0, 360);
      ctx.closePath(); //结束路径
      ctx.fill();
      ctx.restore();
      // console.log("p")
    };
    Point.prototype.drawLineTo = function(p) {
      let dx = this.x - p.x;
      let dy = this.y - p.y;
      
      let s = dx * dx + dy * dy;
      if (s < LineLength) {
        let color = ctx.createLinearGradient(this.x,this.y,p.x,p.y)
        color.addColorStop(1,"#999")
        color.addColorStop(0,"#368")
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = color
        ctx.closePath();
        ctx.stroke();
      }
    };
    function drawBackground(){
                // ctx.beginPath()
                let color = ctx.createLinearGradient(0, 0, 0, canvas.height*0.4);
                color.addColorStop(0, "#3696")
                // color.addColorStop(.25, "#000")
                // color.addColorStop(.5, "#fff6")
                color.addColorStop(1, "#0000")
                ctx.fillStyle = color
                ctx.fillRect(0,0,canvas.width,canvas.height*0.4)
            }
    let points = [];
    for (let i = 0; i < pointNum; i++) {
      let x = Math.random() * W;
      let y = Math.random() * H;
      let cx = Math.random() * MaxV * 2 - MaxV;
      let cy = Math.random() * MaxV * 2 - MaxV;
      points[i] = new Point(x, y, cx, cy);
    }
    let DefaultPoint = new Point(-100, -100, 0, 0);
    function drawAll() {
      ctx.clearRect(0, 0, W, H);
      drawBackground()
      for (let i = 0; i < pointNum; i++) {
        points[i].draw();
        points[i].move();
        for (let j = i + 1; j < pointNum; j++) {
          points[i].drawLineTo(points[j]);
        }
        points[i].drawLineTo(DefaultPoint);
      }
    }
    setInterval(function() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawAll();
    }, intervlTime);
    window.onmousemove = function(e) {
      DefaultPoint.x = e.clientX;
      DefaultPoint.y = e.clientY;
    //   console.log(e.clientX);
    };
  }
};
</script>

<style scoped>
#canvasb{
            margin: 0;
            padding: 0;
            border: 0;
            position: fixed;
            left: 0;
            top:0;
            width:100vw;
            height: 100vh;
            z-index:-1;
            opacity: .9;
            background: #000
        }
</style>