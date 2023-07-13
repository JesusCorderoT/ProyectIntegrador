
// script.js

// Obtener elementos y agregar eventos a las estrellas de cada tarjeta
document.querySelectorAll('.tarjeta').forEach(tarjeta => {
    const estrellas = tarjeta.querySelectorAll('.estrellitas input[type="radio"]');
    const promedio = tarjeta.querySelector('.calificacion .promedio');
    const votos = tarjeta.querySelector('.calificacion .votos');
  
    // Agregar evento de cambio a las estrellas
    estrellas.forEach(estrella => {
      estrella.addEventListener('change', calcularCalificacion);
    });
  
    // Función para calcular la calificación promedio
    function calcularCalificacion() {
      let totalVotos = 0;
      let sumaCalificaciones = 0;
  
      estrellas.forEach(estrella => {
        if (estrella.checked) {
          sumaCalificaciones += parseInt(estrella.value);
          totalVotos++;
        }
      });
  
      const promedioCalificacion = totalVotos > 0 ? sumaCalificaciones / totalVotos : 0;
  
      promedio.textContent = promedioCalificacion.toFixed(1);
      votos.textContent = totalVotos;
    }
  });
  