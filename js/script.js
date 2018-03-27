function getTriangleCenter() {
    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
    return {
        x: x,
        y: y
    };
}

document.addEventListener('mousemove', function(e) {
    const triangleCenter = getTriangleCenter();
    const angle = Math.atan2(e.clientX - triangleCenter.x, -(e.clientY - triangleCenter.y)) * (180 / Math.PI);

    drawEqTriangle(angle);
});

function inRad(num) {
    return num * Math.PI / 180;
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

const side = 100;
const h = side * (Math.sqrt(3) / 2);

function drawEqTriangle(deg) {

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