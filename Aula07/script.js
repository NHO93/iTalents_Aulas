window.onload = function(){
    document.getElementById('cep').addEventListener("focusout", function(){
        pesquisaCep(this.value);
})
}
        

function limpa_formulário{
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('numero').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
}
function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.uf);
    }else{
        //CEP não Encontrado.
        limpa_formulário();
        alert("CEP não encontrado.");
    }
}

function pesquisaCep(valor){

    var cep = valor.replace(/\D/g, '');

    if(cep != ""){
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){
            
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            document.body.appendChild(script);

        }else{
            limpa_formulário();
            alert("Formato de CEP inválido.");
        }
    }else{
        limpa_formulário();
    }
}