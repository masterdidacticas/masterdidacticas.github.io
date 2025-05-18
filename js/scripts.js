
// Función que carga contenido dinámicamente en la página


function loadContent(page) {
  fetch(page)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar la página');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;

      if (page === 'faq.html') {
        const script = document.createElement('script');
        script.src = 'js/faq.js';
        script.onload = () => {
          if (typeof activarFAQ === 'function') {
            activarFAQ();
          }
        };
        document.body.appendChild(script);
      }	  
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadContent('inicio.html');
});



// Cargar la página de inicio por defecto
// Evento que se ejecuta cuando el DOM ha sido completamente cargado

document.addEventListener('DOMContentLoaded', () => {
	// Carga automáticamente la página de inicio al abrir el sitio
    loadContent('inicio.html');
});

//Codigo JS para autoevaluación.
let totalAcertadas = 0;

function evaluarPregunta1() {
    const answer = document.getElementById('q1').value;
    const result = document.getElementById('result1');
    if (answer.includes('texto alternativo') || answer.includes('describir') || answer.includes('imagen')) {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
	
	// Desactivar textarea y botón
	document.getElementById('q1').disabled = true;
    event.target.disabled = true;

	// Mostrar la segunda pregunta
	document.getElementById('pregunta2').style.display = 'block';
	
  // Hacer scroll hacia la siguiente pregunta
  document.getElementById('pregunta2').scrollIntoView({ behavior: 'smooth',block: 'center' });

}

function evaluarPregunta2() {
    const options = document.getElementsByName('q2');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
            break;
        }
    }
	options.forEach(radio => {
    radio.disabled = true;
  	});
    const result = document.getElementById('result2');
    if (selectedOption === 'ul') {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }


    // Desactivar el botón de evaluación
	event.target.disabled = true;

    document.getElementById('pregunta3').style.display = 'block';
	
  document.getElementById('pregunta3').scrollIntoView({ behavior: 'smooth' , block: 'center' });
}

function evaluarPregunta3() {
    const answer = document.getElementById('q3').value;
    const result = document.getElementById('result3');
    if (answer === 'audio') {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    document.getElementById('q3').disabled = true;
    event.target.disabled = true;
    document.getElementById('pregunta4').style.display = 'block';
	
  document.getElementById('pregunta4').scrollIntoView({ behavior: 'smooth', block: 'center'  });
}

function evaluarPregunta4() {
    const options = document.getElementsByName('q4');
    let correctAnswers = ['form', 'input', 'button'];
    let selectedOptions = [];
    for (const option of options) {
        if (option.checked) {
            selectedOptions.push(option.value);
        }
    }
	options.forEach(checkbox => {
    checkbox.disabled = true;
  	});
    const result = document.getElementById('result4');
    if (selectedOptions.sort().toString() === correctAnswers.sort().toString()) {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    event.target.disabled = true;
    document.getElementById('pregunta5').style.display = 'block';
	
  document.getElementById('pregunta5').scrollIntoView({ behavior: 'smooth', block: 'center'  });
}


function evaluarPregunta5() {
    const answer = document.getElementById('q5').value;
    const result = document.getElementById('result5');
    if (answer === 'url') {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    document.getElementById('q5').disabled = true;
    event.target.disabled = true;
    document.getElementById('pregunta6').style.display = 'block';
	
  document.getElementById('pregunta6').scrollIntoView({ behavior: 'smooth', block: 'center'});}

function evaluarPregunta6() {
    const answer = document.getElementById('q6').value;
    const result = document.getElementById('result6');
    if (answer.includes('espacio interno') && answer.includes('espacio externo')) {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    document.getElementById('q6').disabled = true;
    event.target.disabled = true;
    document.getElementById('pregunta7').style.display = 'block';
	
  document.getElementById('pregunta7').scrollIntoView({ behavior: 'smooth', block: 'center'  });
}

function evaluarPregunta7() {
    const options = document.getElementsByName('q7');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
        }
    }
	options.forEach(radio => {
    radio.disabled = true;
  	});
    const result = document.getElementById('result7');
    if (selectedOption === 'background-color') {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    event.target.disabled = true;
    document.getElementById('pregunta8').style.display = 'block';
	
  document.getElementById('pregunta8').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function evaluarPregunta8() {
    const answer = document.getElementById('q8').value;
    const result = document.getElementById('result8');
    if (answer === '#RRGGBB') {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    document.getElementById('q8').disabled = true;
    event.target.disabled = true;
    document.getElementById('pregunta9').style.display = 'block';
	
  document.getElementById('pregunta9').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function evaluarPregunta9() {
    const options = document.getElementsByName('q9');
    let correctOptions = ['position', 'top', 'left'];
    let selectedOptions = [];
    for (const option of options) {
        if (option.checked) {
            selectedOptions.push(option.value);
        }
    }
	options.forEach(checkbox => {
    checkbox.disabled = true;
  	});
    const result = document.getElementById('result9');
    if (selectedOptions.sort().toString() === correctOptions.sort().toString()) {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    event.target.disabled = true;
    document.getElementById('pregunta10').style.display = 'block';
	
  document.getElementById('pregunta10').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function evaluarPregunta10() {
    const answer = document.getElementById('q10').value;
    const result = document.getElementById('result10');
    if (answer === 'em') {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    document.getElementById('q10').disabled = true;
    event.target.disabled = true;
    document.getElementById('pregunta11').style.display = 'block';
	
  document.getElementById('pregunta11').scrollIntoView({ behavior: 'smooth', block: 'center'  });
}

function evaluarPregunta11() {
    const answer = document.getElementById('q11').value;
    const result = document.getElementById('result11');
    if (answer.includes('let') || answer.includes('const') || answer.includes('var')) {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    document.getElementById('q11').disabled = true;
    event.target.disabled = true;
    document.getElementById('pregunta12').style.display = 'block';
	
  document.getElementById('pregunta12').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function evaluarPregunta12() {
    const options = document.getElementsByName('q12');
    let selectedOption;
    for (const option of options) {
        if (option.checked) {
            selectedOption = option.value;
        }
    }
	options.forEach(radio => {
    radio.disabled = true;
  	});
    const result = document.getElementById('result12');
    if (selectedOption === 'addEventListener') {
        result.textContent = 'Correcta ✅';
        totalAcertadas++;
    } else {
        result.textContent = 'Incorrecta ❌';
    }
    event.target.disabled = true;
    document.getElementById('botones').style.display = 'block';
	
  document.getElementById('botones').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function mostrarTotalAcertadas() {
    const result = document.getElementById('totalAcertadas');
    result.textContent = `Total de respuestas correctas: ${totalAcertadas}`;
}

function reiniciarFormulario() {
  totalAcertadas = 0;

  for (let i = 1; i <= 12; i++) {
    const result = document.getElementById(`result${i}`);
    if (result) result.textContent = '';

    const pregunta = document.getElementById(`pregunta${i}`);
    if (pregunta) pregunta.style.display = i === 1 ? 'block' : 'none';

    const boton = document.querySelector(`[onclick="evaluarPregunta${i}()"]`);
    if (boton) boton.disabled = false;

    const input = document.getElementById(`q${i}`);
    if (input) {
      if (input.tagName === 'TEXTAREA' || input.tagName === 'SELECT') {
        input.disabled = false;
        input.value = input.tagName === 'SELECT' ? '' : '';
      }
    }

    const radios = document.getElementsByName(`q${i}`);
    for (const radio of radios) {
      radio.disabled = false;
      radio.checked = false;
    }
  }

  const checkboxes = ['q4', 'q9'];
  for (const name of checkboxes) {
    const options = document.getElementsByName(name);
    for (const option of options) {
      option.disabled = false;
      option.checked = false;
    }
  }

  document.getElementById('totalAcertadas').textContent = '';
  document.getElementById('botones').style.display = 'none';


  // Hacer scroll al inicio de la página
  window.scrollTo({ top: 0, behavior: 'smooth' });

}
