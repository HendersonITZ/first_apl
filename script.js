let Henderson = 'Henderson'
console.log(Henderson)
console.log(`${Henderson}10`);
Henderson = 'henderson'
console.log(Henderson);
const listaDeCompras = ['banana','melancia','leite','coquinha gelada']
console.log(listaDeCompras.slice())
const listaDeCompras2 = {banana:1, melancia:2,}
console.log(listaDeCompras2.banana)
const button = document.getElementById('t')
button.title = 'teste'
if (Henderson === 'henderson' && listaDeCompras.length > 4 ) {
    console.log('entrou agora');
} else {
    console.log('saiu agora');
}
let x = 0 
let y = 0
function move(ms){
    x = x + ms
    y += ms
    console.log(x, y);
}
move(2)
move(10)
console.log(button);
function add() {
    const input = document.getElementById('input')
    const text = input.value 
    const container = document.getElementById('container')
    const newText = document.createElement('p')
    container.appendChild(newText)
    newText.innerText = text
    input.value = ''
}
button.addEventListener('click', add)