function calcLanche(){
    let idadeAtual = document.getElementById("txtidade").value;
    let idadeMax = document.getElementById("txtidademax").value;
    let lanchePerDia = document.getElementById("txtlanches").value;
    let lanchesAno = (lanchePerDia * 365);
    let idadeVelhice = (idadeMax - idadeAtual);
    let lanchesVelhice = (lanchesAno * idadeVelhice);

    let msg = `Você precisará de ${lanchesVelhice} lanches para durar até a velhice de ${idadeVelhice} anos"`;
    alert(msg)
}