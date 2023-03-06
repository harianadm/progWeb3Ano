let idadeAtual = prompt("Idade atual: ")
let idadeMax = prompt("Idade Máxima: ");
let lanchePerDia = prompt("Lanches por dia:");
let lanchesAno = lanchePerDia*365;

let idadeVelhice = idadeMax - idadeAtual;
let lanchesVelhice = idadeVelhice*lanchesAno;

document.writeln("Você precisará de " + lanchesVelhice +  " 17para durar até a velhice de " + idadeVelhice+ " anos");
