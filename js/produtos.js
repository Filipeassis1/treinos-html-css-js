const pacotes = [
    {
        id: 1,
        titulo: 'Viagem para o Atacama',
        descricao: 'Viagem de 05 dias para o deserto do Atacama',
        imagem: '../assets/atacama.webp'
    },

    {
        id: 2,
        titulo: 'Viagem para Guarapari',
        descricao: 'Viagem de 05 dias para o deserto do Atacama',
        imagem: '../assets/guarapari.webp'

    }
];



// funçao para buscar pacotes


function buscarPacotes(){

    const digitado = document.querySelector('#busca').value.toLocaleLowerCase();

    const resultado = pacotes.filter( pacote => pacote.titulo.toLocaleLowerCase().includes(digitado) ||
    pacote.descricao.toLocaleLowerCase().includes(digitado)
    
    );

    mostrarPacotes(resultado);

}




// funcao colocar pacotes na tela


function mostrarPacotes (lista) {

    const container = document.querySelector('#listaPacotes');

    container.innerHTML = '';


    lista.forEach(pacote => {
        container.innerHTML += `
      <article>
        <span>${pacote.titulo}</span>
        <img src="${pacote.imagem}" alt="${pacote.titulo}">
        <p>${pacote.descricao}</p>
        <button>Comprar</button>
      </article>
    `;

    })

}