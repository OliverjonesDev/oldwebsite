const rects = [
    { x: -625, y: -290, x2: 475, y2: 300, colour: "rgb(233, 29, 80)" },
    { x: -600, y: 400, x2: 1500, y2: 200, colour: "rgb(233, 29, 80)" },
    { x: 300, y: -180, x2: 300, y2: 450, colour: "#F7A73E" },
    { x: -1020, y: -530, x2: 300, y2: 900, colour: "#F7A73E" },
    { x: -600, y: 80, x2: 600, y2: 150, colour: "rgb(74, 196, 217)" },
    { x: 800, y: -530, x2: 300, y2: 900, colour: "rgb(74, 196, 217)" },
    { x: 800, y: -300, x2: -400, y2: -230, colour: "rgb(74, 196, 217)" },
]

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1')

}

function draw() {
    noStroke();
    //all rects are being created from the center of the page, and then added into the pages using absolute pix2el values.
    //I tried to make this as responsive as I could by2 depending on the users screen size it would flip flop between drawing different sets but 
    for (var i = 0; i < rects.length; i++) {
        console.log(rects[i].x / 2, rects[i].y / 2);
        fill(rects[i].colour);
        rect((windowWidth / 2) + rects[i].x, (windowHeight / 2) + rects[i].y, rects[i].x2, rects[i].y2);
    }
}