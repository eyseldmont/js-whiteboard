
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var button = document.getElementById('eraseButton');


var isPainting = false;
var lastX = 0;
var lastY = 0;

button.addEventListener('click',resetCanvas);
canvas.addEventListener('mousedown', paintFunc);
canvas.addEventListener('mouseup', stopPaint);
canvas.addEventListener('mousemove', drawFunc);

function resetCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

function paintFunc(e){
    isPainting = true;
    [lastX,lastY] = [e.offsetX, e.offsetY];
}

function stopPaint(){
    isPainting = false;

}

function drawFunc(e){
    if(!isPainting) return;

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();

    [lastX, lastY] = [e.offsetX, e.offsetY];
    
}