function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')

}

function draw() {
    clear();
    noStroke();
    fill("#E91D50");
    rect((windowWidth / 2) - 625, (windowHeight / 2) - 290, 300, 300);
    rect((windowWidth / 2) - 600, (windowHeight / 2) + 400, 1500, 200);
    fill(247, 167, 62);
    rect((windowWidth / 2) + 300, (windowHeight / 2) - 180, 300, 450);
    rect((windowWidth / 2) - 1020, (windowHeight / 2) - 530, 300, 900);
    fill("#4AC4D9");
    rect((windowWidth / 2) - 600, (windowHeight / 2) + 80, 600, 150);
    fill("#4AC4D9");
    rect((windowWidth / 2) + 800, (windowHeight / 2) - 530, 300, 900);
    rect((windowWidth / 2) + 800, (windowHeight / 2) - 300, -400, -230);
}