let listaAmigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim().toLowerCase();

    if (nombreAmigo === '') {
        alert('Ingrese un nombre válido');
        return;
    }

    if (listaAmigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    listaAmigos.push(nombreAmigo);
    actualizarListaAmigos();
    inputAmigo.value = '';
}

function actualizarListaAmigos() {
    const listaUI = document.getElementById('listaAmigos');
    listaUI.innerHTML = '';
    
    listaAmigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        listaUI.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert('Necesita al menos dos personas para realizar el sorteo.');
        return;
    }

    const resultadoUI = document.getElementById('resultado');
    resultadoUI.innerHTML = '';

    // Selecciona un nombre al azar de la lista
    const amigoSecretoIndex = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[amigoSecretoIndex];
    
    const p = document.createElement('p');
    p.textContent = `Tu amigo secreto es: ${amigoSecreto.charAt(0).toUpperCase() + amigoSecreto.slice(1)}`;
    resultadoUI.appendChild(p);
}