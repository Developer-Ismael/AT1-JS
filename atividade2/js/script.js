function saberSituacao() {
    let nome1 = document.querySelector(".nome").value;
    let numero = parseInt(document.querySelector("#numeroInscricao").value);
    let nasci = parseInt(document.querySelector("#anoNascimento").value);

    let n1 = parseFloat(document.querySelector("#natureza").value);
    let n2 = parseFloat(document.querySelector("#humanas").value);
    let n3 = parseFloat(document.querySelector("#linguagens").value);
    let n4 = parseFloat(document.querySelector("#matematica").value);
    let n5 = parseFloat(document.querySelector("#redacao").value);

    let resultado  = "";
    let resultado1 = "";
    let resultado2 = "";
    let resultado3 = "";
    let resultado4 = "";


    let resultadoano = "";


    // Verificando a situação para Natureza
    if (n1 < 400) {
        resultado = "<span class='reprovado'>Reprovado</span>";
    } else if (n1 <= 549) {
        resultado = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultado = "<span class='aprovado'>Aprovado</span>";
    }

    // Verificando a situação para Humanas
    if (n2 < 400) {
        resultado1 = "<span class='reprovado'>Reprovado</span>";
    } else if (n2 <= 549) {
        resultado1 = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultado1 = "<span class='aprovado'>Aprovado</span>";
    }

    // Verificando a situação para Linguagens
    if (n3 < 400) {
        resultado2 = "<span class='reprovado'>Reprovado</span>";
    } else if (n3 <= 549) {
        resultado2 = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultado2 = "<span class='aprovado'>Aprovado</span>";
    }
    
    // Verificando a situação para matematica
    if (n4 < 400) {
        resultado3 = "<span class='reprovado'>Reprovado</span>";
    } else if (n4 <= 549) {
        resultado3 = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultado3 = "<span class='aprovado'>Aprovado</span>";
    }
    
    // Verificando a situação para Redação
    if (n5 < 400) {
        resultado4 = "<span class='reprovado'>Reprovado</span>";
    } else if (n5 <= 549) {
        resultado4 = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultado4 = "<span class='aprovado'>Aprovado</span>";
    }

    //Veificando ano nascimento
    if (nasci >= 1901 && nasci <= 2007) {
        resultadoano = nasci
    }

    else {
        resultadoano = "Data Inavlida"
    }


    //NUMERO DE INSCRIÇÃO 



    
    let p = document.querySelector(".resultado");
    p.innerHTML =   `Aluno: ${nome1}<br>
    Numero de inscrição: 2024${numero}<br>
    Ano de Nascimento: ${resultadoano}; <br><br><br><br>
    ${resultado} em Natureza, a nota foi: ${n1}. <br><br>
    ${resultado1} em Humanas, a nota foi: ${n2}. <br> <br>
    ${resultado2} em Linguagens, a nota foi: ${n3}. <br> <br>
    ${resultado3} em Matematica, a nota foi: ${n4}. <br> <br>
    ${resultado4} em Redação, a nota foi: ${n5}.`;

}

let botao = document.querySelector('.botao');
botao.addEventListener("click", saberSituacao);


     
     
     
