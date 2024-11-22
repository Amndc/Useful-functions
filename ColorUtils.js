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
