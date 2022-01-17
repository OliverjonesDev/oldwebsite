
//The detectDist is a redundent function in this version however I found that it is best to keep this incase the array is expanded and you can have custom
//values for precise control.
const rects = [
    { x: -625, y: -290, x2: 475, y2: 300, colour: "rgb(233, 29, 80)", changeColour :false, detectDist: 450},
    { x: -600, y: 400, x2: 1500, y2: 200, colour: "rgb(233, 29, 80)" , changeColour :false, detectDist: 450},
    { x: 300, y: -180, x2: 300, y2: 450, colour: "#F7A73E" , changeColour : false, detectDist: 450},
    { x: -1020, y: -530, x2: 300, y2: 900, colour: "#F7A73E" , changeColour :false, detectDist: 450},
    { x: -600, y: 80, x2: 600, y2: 150, colour: "rgb(74, 196, 217)", changeColour : false , detectDist: 450},
    { x: 800, y: -530, x2: 300, y2: 900, colour: "rgb(74, 196, 217)" , changeColour : false, detectDist: 450},
    { x: 800, y: -300, x2: -400, y2: -230, colour: "rgb(74, 196, 217)" , changeColour : false, detectDist: 450},
]

const colours = [
    "rgb(233, 29, 80)",
    "#F7A73E",
    "rgb(74, 196, 217)"
]

var hoverOn = false;

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

function hoverFunct(int)
{

    //Maths explanation
    //Center of screen width wise + (left side x + right side x / 2),Center of screen height wise + (top + bottom / 2), where is the mouse if close display//
    //                         These two give the center of the cur rect
    if (dist((windowWidth / 2) + rects[int].x + rects[int].x2 / 2, (windowHeight / 2) + rects[int].y + rects[int].y2 / 2, mouseX, mouseY ) < rects[int].detectDist)
    {
        fill(rects[int].colour);
        rects[int].changeColour = true;
    }
    else
    {               
        rects[int].changeColour = false;
        if (rects[int].changeColour == false)
        {
            fill("white");
        }
    }

}