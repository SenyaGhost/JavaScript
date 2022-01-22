import Lines from './lines.js';

class application {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.canvas.width = 800;
        this.canvas.height = 800;
        this.line = [];
    }
    generateLines() {
        for (let lineCounter = 0; lineCounter < 120; lineCounter++) {
            let lines = new Lines(lineCounter, this.ctx);
            this.line.push(lines);
        }
    }

    show() {
        for (let i = 0; i < 120; i++)
        this.line[i].drow();
    }

    run() {
        this.generateLines()
        this.show()
    }

}

new application().run();
console.log("Lines")
