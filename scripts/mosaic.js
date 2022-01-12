function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')

}

function draw() {

    //all rects are being created from the center of the page, and then added into the pages using absolute pixel values.
    //I tried to make this as responsive as I could by depending on the users screen size it would flip flop between drawing different sets but 
    clear();
    noStroke();
    fill("#E91D50");
    rect((windowWidth / 2) - 625, (windowHeight / 2) - 290, 475, 300);
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