var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
    sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(draw);
}

function draw() {
    var context = document.getElementById('canvas').getContext('2d');

    context.globalCompositeOperation='destination-over';
    context.clearRect(0, 0, 300, 300);
    
    context.fillStyle='rgba(0,0,0,0.4)';
    context.strokeStyle='rgba(0,153,255,0.4)';
    context.save();
    context.translate(150, 150);
    

    // Terra
    var time = new Date();
    context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI)/60000) * time.getMilliseconds());
    context.translate(105, 0);
    context.fillRect(0, -12, 50, 24);//sombra
    context.drawImage(earth, -12, -12);

    //Lua
    context.save();
    context.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    context.translate(0, 28.5);
    context.drawImage(moon, -3.5, -3.5);
    context.restore();
    
    context.restore();
    
    context.beginPath();
    context.arc(150, 150, 105, 0, Math.PI * 2, false);
    context.stroke();
    
    context.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);
}



    // Desenha um retangulo preenchido -> context.fillRect(x,y,w,h)
    // Desenha a borda do retangulo -> context.strokeRect(x,y,w,h)
    // Cria um novo caminho -> context.beginPath();
    // Move o ponto de inicio ->  context.moveTo(25,25);
    // Desenha uma linha do ponto inicial ate o ponto desejado ->  context.lineTo(105,25);
    // Desenha forma com preenchimento e fecha o path ->  context.fill();
    // Desenha forma sem preenchimento não fecha o path ->  context.closePath();
    // Fecha o path -> context.stroke();
    // formula de graus para radians = (Math.PI/180)*degrees
    // Desenha um arco centralizado na posição (x, y) -> context.arc(x,y,radius,startAngle,endAngle)    
    // Desenha um arco com os pontos de controle e raio, conectados ao ponto anterior por uma linha reta -> arcTo(x1, y1, x2, y2, radius)
    // Desenha um retângulo cujo canto superior esquerdo é especificado por (x, y) com base em uma largura (width) e uma altura (height) -> rect(x, y, width, height)
    // Preenche com um determinado texto as cordenadas (x,y) recebidas. Opcionalmente com uma largura máxima para o desenho -> fillText(text, x, y [, maxWidth])