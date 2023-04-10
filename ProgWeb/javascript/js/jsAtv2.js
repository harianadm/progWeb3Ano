function calcCircunf() {
    let raio = document.getElementById("txtraio").value;
    let comprimento = 2*Math.PI*raio
    let msgCirc = `A circunferência tem ${comprimento}`;
    alert(msgCirc);
    let areaBase = Math.PI*raio**2
    let msgBase = `A Área da base é ${areaBase}`;
    alert(msgBase);
}

