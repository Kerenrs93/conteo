const contador=()=>{
    const fechaDeseada=new Date('April 12, 2022 12:00:00').getTime();
    const fechaActual= new Date().getTime();
    const diferencia= fechaDeseada-fechaActual;

    const segundos=1000;
    const minutos=segundos*60;
    const horas= minutos*60;
    const dias= horas * 24;
    
    document.querySelector("#diasTexto").innerText=Math.floor(diferencia/dias)
    document.querySelector("#horasTexto").innerText=Math.floor((diferencia%dias)/horas);
    document.querySelector("#minutosTexto").innerText=Math.floor((diferencia%horas)/minutos);
    document.querySelector("#segundosTexto").innerText=Math.floor((diferencia%minutos)/segundos);
}
setInterval(() => {contador();}, 1000);