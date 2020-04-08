let cep = document.querySelector('#cep')
let rua = document.querySelector('#rua')
let complemento = document.querySelector('#complemento')
let bairro = document.querySelector('#bairro')
let uf = document.querySelector('#uf')


cep.onkeyup = async(event)=>{

    if(cep.value.length == 8){
        console.log('isso funciona')
        let resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        let dadosDoCep = await resposta.json();

        rua.value = dadosDoCep.logradouro;
        complemento.value = dadosDoCep.complemento;
        bairro.value = dadosDoCep.bairro;
        uf.value = dadosDoCep.uf;
    }


}










// async function pegarCep (){

//     let viaCep = await fetch('https://viacep.com.br/ws/json/')

//     let listaDeCep = await viaCep.json();
// }