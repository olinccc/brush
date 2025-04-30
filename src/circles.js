import Point from "./point";

export default class Circles {
    constructor(args = {}) {
        this.palette = args.palette || ['#DB1FB5', '#DB351F',' #DB1F44',' #C880DB', '#DB1F44', '#C880DB'];
        this.totalPoints = args.totalPoints || 10;
        this.bg = this.palette[Math.floor(Math.random() * this.palette.length)];
        this.points = [];

        for (let i = 0; i < this.totalPoints; i++) {
            const randomColor = this.palette[Math.floor(Math.random() * this.palette.length)];
            const point = new Point({
                fill: randomColor,
                size: 300 - (20 * i),
                friction: i * 0.1,
            });
            this.points.push(point);
        }
    }
    draw() {
        background(this.bg);
        for (let i = 0; i < this.points.length; i++) {
            blendMode(HARD_LIGHT);
            this.points[i].draw();
        }
    }
}
