import Tile from "./tile.js";
export class MatrixTile {
    constructor(ctx, n, tileEdge, tilePadding) {
        this.ctx = ctx;
        this.n = n;
        this.tileEdge = tileEdge;
        this.tilepadding = tilePadding;
        this.tiles = this.getTiles();

    }
    getTiles() {
        let t = [];
        for (let i = -this.n / 2; i < this.n / 2; i++)
            for (let j = -this.n / 2; j < this.n / 2; j++)
                t.push(new Tile(this.ctx, this.tileEdge, (this.tileEdge + this.tilepadding) * i + this.tilepadding / 2, (this.tileEdge + this.tilepadding) * j + this.tilepadding / 2));
        return t;
    }
    draw() {
        for (let i = 0; i < this.n * this.n; i++) {
            if (i % 2 === 0) {
                this.tiles[i].setColor("#FF0000");
            }
            if (i % 3 === 0) {
                this.tiles[i].setColor("#0000FF");
            }
            this.tiles[i].draw();
        }
    }
}
export default MatrixTile;