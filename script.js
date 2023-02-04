alert("Estamos começando a imersão :)");
var nomePessoa = prompt("Olá! Para começarmos digite seu nome por gentileza");
var valorEmDolar = prompt("Com Quantos Dólares faremos as operações???");
var cotacaoDoDolar = 5.32;
var cotacaoBitCoin = 117835.74;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);
var valorBitCoin = valorEmReal / cotacaoBitCoin;
var anosLuzEmKm = 9461000000000;
var anosLuzEmMetros = anosLuzEmKm * 1000;
var siriusADistanciaAnosLuz = 8611;
var siriusADistanciaMetros = siriusADistanciaAnosLuz * anosLuzEmMetros;
valorBitCoin = valorBitCoin.toFixed(6);
alert(
  nomePessoa +
    ": O valor de US$" +
    valorEmDolar +
    " convertido para Real é de R$" +
    valorEmReal +
    " O que Representa em Bitcoin aproximadamente: " +
    valorBitCoin +
    " BTC"
);
alert("O valor atual do BTC é de R$ " + cotacaoBitCoin);
alert(
  "Um Ano Luz possui " +
    anosLuzEmKm +
    " km que são " +
    anosLuzEmMetros +
    " metros"
);
alert(
  "A Estrela Sirius A está à 8611 anos Luz da Terra, correspondendo à " +
    siriusADistanciaMetros +
    " metros... Incrível né!?"
);
