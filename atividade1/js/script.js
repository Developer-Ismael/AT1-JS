function calculoPagamento() {
    let nome = document.querySelector("#nome").value;
    let numero = parseFloat(document.querySelector("#numeroPis").value);
    let valorHora = parseFloat(document.querySelector("#valorHora").value);
    let qauntHoras = parseFloat(document.querySelector("#horaTrabalhada").value);

    let salario = valorHora * qauntHoras

    //inss
    let inss = 0; 
    if (salario <= 1500.99) {
        inss = salario * 0.075; 
    } else if (salario <= 3000.99) {
        inss = salario * 0.09; 
    } else if (salario <= 5000.99) {
        inss = salario * 0.12; 
    } else {
        inss = salario * 0.14; 
    }

    //iss
    let iss = 0.05; 


    //Ir
    let ir = 0;
    if (salario <= 1500.99) {
        ir = 0; 
    } else if (salario <= 2000.99) {
        ir = salario * 0.075; 
    } else if (salario <= 3000.99) {
        ir = salario * 0.15; 
    } else if (salario <= 4000.99) {
        ir = salario * 0.225; 
    } else {
        ir = salario * 0.275; 
    }

    //Salario Final
    let salarioFinal = salario - inss - iss - ir;

    document.querySelector(".resultado").innerHTML =  
     `Nome: ${nome} <br>
     Salário Bruto: R$${salario}<br>
     Desconto INSS: R$${inss}<br>
     Desconto ISS: R$${(salario * iss)}<br>
     Desconto IR: R$${ir}<br>
     Salário Líquido: R$${salarioFinal}`;




}
document.querySelector('button').addEventListener('click', calculoPagamento);