//Gera cores monocromaticas apartir da cor desejada em rgb. 
function CriaCoresMonocromaticoRGB(color) {
            var rgbValues = color.match(/\d+/g).map(Number);
            var vermelho = rgbValues[0];
            var verde = rgbValues[1];
            var azul = rgbValues[2];

            var random = Math.random();

            var newVermelo = Math.floor(vermelho + (255 - vermelho) * random);
            var newVerde = Math.floor(verde + (255 - verde) * random);
            var newAzul = Math.floor(azul + (255 - azul) * random);

            return `${newVermelo} ${newVerde} ${newAzul}`;
    }

// Valida Luminosidade de uma cor.
function validaLuminosidade(hex) {
    var nib = hex.split('');

    var r = parseInt(nib[1] + nib[2], 16);
    var g = parseInt(nib[3] + nib[4], 16);
    var b = parseInt(nib[5] + nib[6], 16);
    var lum = (r * 299 + g * 587 + b * 114) / 1000;

    if (lum > 128) {
       return 1
    }
    else {
       return 0
    }
}
