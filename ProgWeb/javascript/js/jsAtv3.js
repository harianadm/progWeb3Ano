function traduz() {
    let traducao = document.getElementById("txtidioma").value;
    if (traducao=="fr"){
        document.writeln("Bonjour tout le monde!")
    }
    else if (traducao=="es"){
        document.writeln("Hola,  Mundo!")
    }
    else{
        document.writeln("Hello World!")
    }
}

