document.getElementById('sortear').addEventListener('click', function() {
    const times = [
        'PSG', 'Manchester City', 'Barcelona', 'Bayern de Munchen',
        'Juventus', 'Benfica', 'Real Madrid', 'Atletico de Madri'
    ];

    //Embaralha os times
    const timesEmbaralhados = times.sort(() => Math.random () - 0.5);

    //Seleciona um elemento UL para mostrar os resultados
    const listaTimes = document.getElementById('lista-times');
    listaTimes.innerHTML = ''; //Limpa a lista existente

    //Adiciona os times sorteados a lista
    timesEmbaralhados.forEach(time => {
    listaTimes.textContent = time;
    listaTimes.appendChild(li);
    });
});