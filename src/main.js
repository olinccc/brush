import Circles from './circles.js';

let circles;
window.setup = (event) => {
    circles = new Circles({
        palette: ['#DB1FB5', '#DB351F',' #DB1F44',' #C880DB', '#DB1F44', '#C880DB'], totalPoints: 10,
    });
    createCanvas(windowWidth, windowHeight);

window.draw = (event) => {
    circles.draw()
};

window.windowResized = (event) => {
    resizeCanvas(windowWidth, windowHeight);
}

window.mousePressed = (event) => {
  
};
window.mouseMoved = (event) => {
    circles.points.forEach(point => {
        point.update(createVector(mouseX, mouseY));
    });
}
}