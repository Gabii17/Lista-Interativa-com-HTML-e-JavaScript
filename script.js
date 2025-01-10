// Captura dos elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.getElementById('lista-nao-ordenada');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

// Definindo conteúdo textual para h1 e a
titulo.innerText = 'Bem-vindo ao Projeto HTML e JavaScript';
link.innerText = 'Acesse ProZ Educação';

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1 da lista não ordenada</li>
    <li>Item 2 da lista não ordenada</li>
    <li>Item 3 da lista não ordenada</li>
`;

// Adicionando itens à lista ordenada com links
listaOrdenada.innerHTML = `
    <li><a href='https://www.google.com' target='_blank'>Google</a></li>
    <li><a href='https://www.github.com' target='_blank'>GitHub</a></li>
    <li><a href='https://www.mozilla.org' target='_blank'>Mozilla</a></li>
`;
