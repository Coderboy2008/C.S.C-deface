var c = document.getElementById("matrix-bg");
var ctx = c.getContext("2d");

c.height = window.innerHeight;
c.width = window.innerWidth;

var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";

matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size;

var drops = [];

for (var x = 0; x < columns; x++)
    drops[x] = 1;


function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.font = font_size + "px arial";

    for (var i = 0; i < drops.length; i++) {

        var text = matrix[Math.floor(Math.random() * matrix.length)];

        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        drops[i]++;
    }
}

function TitleAnimation() {
    var Title = document.getElementById("only-sec");
    Title.style.opacity = "1"
}

function runanim() {
    setTimeout(TitleAnimation, 2500);
}

setInterval(draw, 35);
runanim();
