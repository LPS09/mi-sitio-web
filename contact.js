document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const object = {};
    data.forEach((value, key) => {
        object[key] = value;
    });
    const json = JSON.stringify(object);

    fetch('/.netlify/functions/contact', {
        method: 'POST',
        body: json,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('response-message').textContent = 'Mensaje enviado correctamente.';
            form.reset();
        } else {
            document.getElementById('response-message').textContent = 'Error al enviar el mensaje.';
        }
    })
    .catch(error => {
        document.getElementById('response-message').textContent = 'Error al enviar el mensaje.';
    });
});
