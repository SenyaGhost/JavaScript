export class Tile {
    constructor(ctx, tileWidth, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = tileWidth;
        this.height = tileWidth;
        this.color = 'red';
    }

    setColor() {
        this.color = "#" + Math.floor(Math.random() * 16777215).toString(16);;
    }

    setAngle() {
        this.angle = Math.random();
        }

    draw() {
        this.ctx.save();
        this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        this.ctx.rotate(this.angle);
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.ctx.restore();
    }
}
export default Tile;