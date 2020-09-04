const myCanvas = { width: 600, height: 600};
const backgroundColor = [230,220,190];
const ball1 = {
    x: 300,
    y: 300,
    r: 100,
    speed: 1,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
} 

const ball2 = {
    x: 300,
    y: 100,
    r: 50,
    speed: 2,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
} 

const ball3 = {
    x: 300,
    y: 200,
    r: 80,
    speed: 2,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
} 

const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];

const lineWidth = 3;
const activelineWidth = 9;


const leftEdge = {
    x1: 230,
    y1: 0,
    x2: 230,
    y2: 600,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 370,
    y1: 0,
    x2: 370,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}

const balls = [ball1, ball2, ball3];

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);   
}


function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x > rightEdge.x1 - ball.r/2){
        ball.speed *= -1;
        activateLine(rightEdge);
    } else if(ball.x < leftEdge.x1 + ball.r/2){
        ball.speed *= -1;
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}

function displayBall({x ,y, r, fillColor, strokeColor, outlineWidth}){
    fill(fillColor);
    stroke(strokeColor);
    strokeWeight(outlineWidth)
    ellipse(x, y, r);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}


function activateLine(object){

    object.color = activeLineColor;
    object.width = activelineWidth;

    setTimeout(() => resetLines(object), 500);
}


function resetLines(object){
    object.color = lineColor;
    object.width = lineWidth;
}