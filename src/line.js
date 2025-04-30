export default class Line {
    constructor(args = {}) {
        this.points = [];
        this.stroke = args.stroke || 0;
        this.strokeWeight = args.strokeWeight || 1;
    }
    addPoint(point) {
        this.points.push(point);
    }
    draw() {
       noFill();
        stroke(0);
        strokeWeight(2);
        beginShape();
        this.points.forEach((point) => {
            vertex(point.x, point.y);
        });
        endShape();
    }
}