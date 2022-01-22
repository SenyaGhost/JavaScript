
import MatrixTile from "./matrixTile.js";

class Application {
    constructor() {
        this.debugMode = true;
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.screenWidth = this.canvas.width;
        this.screenHeight = this.canvas.height;
        this.matrixTile = new MatrixTile(this.ctx, 10, 25, 10);
    }

    run(debug) {
        if(debug) {
        console.log(debug);
        }
        this.animate();
    }
    animate() {
        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);
        this.ctx.save();
        this.ctx.translate(this.screenWidth / 2, this.screenHeight / 2);
        this.matrixTile.draw();
        this.ctx.restore();
        if (this.debugMode) {
            // this.drawGrid();
            // this.drawFPS();
        }
        requestAnimationFrame(() => this.animate());

    }
    drawGrid() {
        this.ctx.strokeStyle = "green";
        this.ctx.beginPath();
        this.ctx.moveTo(this.screenWidth/2 ,0);
        this.ctx.lineTo(this.screenWidth/2, this.screenHeight);
        this.ctx.stroke();
        this.ctx.moveTo(0,this.screenHeight/2);
        this.ctx.lineTo(this.screenWidth, this.screenHeight/2);
        this.ctx.stroke();
    }
     drawFPS() {
        this.ctx.font = "14px Verdana";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`FPS: ${this.fps}`, this.screenWidth - 90, 20);
        this.ctx.fillText(`Time: 10`, this.screenWidth - 90, 40);
    }
}
window.addEventListener("load", function (event) {
    let app = new Application();
    app.run(true);
});

var before,now,fps;
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
        requestAnimationFrame(loop);
        console.log(fps);
    }
);