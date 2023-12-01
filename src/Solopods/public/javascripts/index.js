// public/javascripts/index.js

$(document).ready(function() {
    const canvas = document.getElementById('carouselCanvas');
    const ctx = canvas.getContext('2d');
  
    const images = [
      '/images/dosVapesAgua.jpeg',
      '/images/dosVapesPiscina.jpeg',
      '/images/fondoEscritorio.jpeg'
    ];
  
    let currentIndex = 0;
  
    function drawImage(index) {
      const img = new Image();
      img.src = images[index];
      img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      drawImage(currentIndex);
    }
  
    // Cargar la primera imagen
    drawImage(currentIndex);
  
    // Cambiar la imagen automáticamente cada 1,5 segundos
    setInterval(nextImage, 1500);
  });
  