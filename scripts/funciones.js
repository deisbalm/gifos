

//1. identificar el contenedor padre de los nuevos elementos


//2. escribir una funcion que reciba ese padre y pinte los nuevos elementos
//3. crear el elemento nuevo base  o padre de los nuevos
//4. agregar clases si es necesario al elemento base del punto 3
//5. agregar el contenido dinamico al elem base del punto 3 con innerHTML
// copiar y pegar todo el contenido dentro de backticks
//6. iterar sobre los datos del api
//7. cortar todo el codigo de nuevo perro o base dentro del foreach
//8. usar el operador signodolar {} ${} y ubicar los datos correspondientes
//8.1 agregar eventos al elemento recien creado
//9. agregar el nuevo elemento o base al contenedor padre con appendChild
//10. llamar a la funcion del punto 1 con el respectivo padre contenedor
//11. celebrar la victoria



   /* <div class="trending-gifos">
    
 
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div> 
      
    </div>
*/





const trendingGifos = (parent) =>{
    const trending = document.createElement('div');
    trending.classList.add('trending-gifos');
    trending.classList.add('box');
}
