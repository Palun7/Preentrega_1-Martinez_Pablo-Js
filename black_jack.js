let nombre = prompt("Bienvenid@, ingresá tu nombre.")
if (nombre != "" && nombre != null){
    alert(`Perfecto, ${nombre}, vamos a jugar al black jack con clicks. Tenes que sumar 21 puntos para ganar. Tenes que estar atento a las preguntas para sumar puntos mas rápido.`);

    function black_jack() {
        let click = 0;
        while (true) {
            if (click === 5) {
                let opcion = prompt("para sumar 5 puntos, ¿Cuantos satelites naturales tiene la tierra?(apreta cancelar para finalizar)");
                if (opcion == "1") {
                    alert("Acertaste, sumaste 5 puntos.")
                    click += 5;
                }
                else if (opcion === null) {
                    break;
                }
                else{
                    alert("Calculo que solo querias sumar un punto.")
                    click += 1;
                }
            }
            else if (click === 11){
                let opcion = prompt("para sumar 3 puntos, ¿Cuánto es la mitad de 550?(apreta cancelar para finalizar)")
                if (opcion == "275") {
                    alert("Acertaste, sumaste 3 puntos.");
                    click += 3;
                }
                else if (opcion === null) {
                    break;
                }
                else {
                    alert("Solo voy a decir que sumaste un punto.");
                    click += 1;
                }
            }
            else if (click === 15){
                let opcion = prompt("para sumar 5 puntos, ¿cuantos meses tienen 28 días?(apreta cancelar para finalizar)");
                if (opcion == "12") {
                    alert("Acertaste, sumaste 5 puntos.")
                    click += 5;
                }
                else if (opcion === null) {
                    break;
                }
                else {
                    alert("Creo que te voy a sumar un solo punto.")
                    click += 1;
                }
            }
            let opcion = prompt("apreta aceptar para sumar un punto y cancelar para finalizar.");
            if (opcion === null) {
                break;
            }
            else {
                click += 1;
            }
        }
        return click;
    }

    let resultado = black_jack();
    if (resultado > 21) {
        alert(`Diste ${resultado} clicks, te pasaste...`);
    }else if (resultado < 21) {
        alert(`Diste ${resultado} clicks, te falto un poco...`);
    }else {
        alert(`Diste ${resultado} clicks, BLACKJACK!`);
    }
}
else if (nombre === null) {
    alert("Veo que no queres jugar, nos vemos pronto.")
}
else {
    alert("Debes colocar un nombre, recargá la página.")
}