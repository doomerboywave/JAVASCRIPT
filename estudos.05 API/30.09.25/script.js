const outRua = document.querySelector("#idRua");
const outBairro = document.querySelector("#idBairro");
const outCidade = document.querySelector("#idCidade");
const outEstado = document.querySelector("#idEstado");
const inCep = document.querySelector("#inCep");

function satinizarCep(cep){

}
inCep.addEventListener("blur", () => {
     let cep = satinizarCep(inCep.value)
    

});


inCep.addEventListener("input", () => {
    let cep = inCep.value.replace(/\D/g, "");

    if(cep.length != 8) {
        
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            if(data.erro) {
                alert("CEP inválido");
                outRua.value = "";
                outBairro.value = "";
                outCidade.value = "";
                outEstado.value = "";
                return;
            }

            outRua.value = data.logradouro;
            outBairro.value = data.bairro;
            outCidade.value = data.localidade;
            outEstado.value = data.estado;
        })
    



});


   





//let cep = "38400-126".replace(/\D/g, "");
//let url = `https://viacep.com.br/ws/${cep}/json/`;



//fetch(url)
//    .then(response => response.json())
//    .then(data => {

//        console.log(data);

//    });