let nombre = prompt("Bienvenid@, ingresá tu nombre.");

function verificar(nombre){
    if(nombre != "" && nombre != null){
        return(nombre);
    }
    else {
        return(null);
    }
}

nombre = verificar(nombre);
if (nombre) {
    alert(`Perfecto, ${nombre}, vamos a jugar al black jack con clicks. Tenes que sumar 21 puntos para ganar. Tenes que estar atento a las preguntas para sumar puntos mas rápido.`);
    let resultado = black_jack();

    if (resultado > 21) {

        alert(`Sumaste ${resultado} puntos, te pasaste...`);

    }else if (resultado < 21) {

        alert(`Sumaste ${resultado} puntos, te falto un poco...`);

    }else {

        alert(`Sumaste ${resultado} puntos, BLACKJACK!`);

    }
}else {

    alert("Juego cancelado, nos veremos pronto.");

}


function black_jack() {
    let click = 0;

    while (true) {
        if (click === 5) {

            let opcion = prompt("para sumar 5 puntos, ¿Cuantos satelites naturales tiene la tierra?(apreta cancelar para finalizar)");
            if (opcion == "1") {

                alert("Acertaste, sumaste 5 puntos.");
                click += 5;

            }
            else if (opcion === null) {

                break;

            }
            else if (opcion == "") {

                alert("Sumaste un punto.");
                click += 1;

            }
            else{

                alert("Sabías que la luna es el único satelite natural de la tierra, ¿no? Igual te doy un puntito.");
                click += 1;

            }
        }
        else if (click === 11){

            let opcion = prompt("para sumar 3 puntos, ¿Cuánto es la mitad de 550?(apreta cancelar para finalizar)");
            if (opcion == "275") {

                alert("Acertaste, sumaste 3 puntos.");
                click += 3;

            }
            else if (opcion === null) {

                break;

            }
            else if (opcion == "") {

                alert("Sumaste un punto");
                click += 1;

            }
            else {

                alert("Hay que practicar mas las matemáticas, igual te sumo un punto.");
                click += 1;

            }
        }
        else if (click === 15){
            let opcion = prompt("para sumar 5 puntos, ¿cuantos meses tienen 28 días?(apreta cancelar para finalizar)");
            if (opcion == "12") {

                alert("Acertaste, sumaste 5 puntos.");
                click += 5;

            }
            else if (opcion === null) {

                break;

            }
            else if (opcion == "") {

                alert("Sumaste un punto.");
                click += 1;

            }
            else {

                alert("Amm... Todos los meses tienen 28 dias. Igual te regalo un punto.");
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