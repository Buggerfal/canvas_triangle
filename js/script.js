var side = 100;

function getTriangleCenter() {
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2 - (side / 2);
    return {
        x: x,
        y: y
    };
}

document.addEventListener('mousemove', function(e) {
    var triangleCenter = getTriangleCenter();
    var angle = Math.atan2(e.clientX - triangleCenter.x, -(e.clientY - triangleCenter.y)) * (180 / Math.PI);

    drawEqTriangle(canvas.width / 2, canvas.height / 2, angle);
});

function inRad(num) {
    return num * Math.PI / 180;
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function drawEqTriangle(cx, cy, deg) {
    var h = side * (Math.sqrt(3) / 2);

    ctx.strokeStyle = "black";
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(inRad(deg));
    ctx.beginPath();
    ctx.moveTo(0, -h / 1);
    ctx.lineTo(-side / 2, h / 2);
    ctx.lineTo(side / 2, h / 2);
    ctx.lineTo(0, -h / 1);
    ctx.stroke();
    ctx.closePath();
    ctx.save();
    ctx.restore();
}

drawEqTriangle(0);