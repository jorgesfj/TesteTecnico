function somatorio(numero){
    soma = 0
    for(var i = 3; i< numero; i++){
        if( i%3 ==0 || i%5 ==0){
            soma += i;
        }
    }
    return soma;
}

var numero = 201524; //Troque esse valor para testes
console.log(somatorio(numero));