let carrito = [];


function agregar_a_carrito(e){

    console.log("HOLA: ", e.target);

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    let nombre_producto = padre.querySelector("h5").textContent;
    let precio_producto = padre.querySelector("span").textContent;
    let img_producto = abuelo.querySelector("img").src;


    /*
    console.log(nombre_producto);
    console.log(precio_producto);
    console.log(img_producto);
    */

    let producto = {
        nombre: nombre_producto,
        precio: precio_producto,
        cantidad: 1,
        img: img_producto
    };

    // NO AGREGAR DUPLICADOS
    // CALCULAR EL TOTAL DEL CARRITO ---> REDUCE
    // GUARDAR LOS DATOS DEL CARRITO EN LOCALSTORAGE/SESSION

    carrito.push( producto );
    console.log( carrito );

    mostrar_carrito();
}



function mostrar_carrito(){


    // TAREA RENDER DEL CARRITO EN LOCALSTORAGE//

    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for( let producto of carrito ){

        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                          <td><p>${producto.nombre}</p></td>
                          <td>${producto.cantidad}</td>
                          <td>${producto.precio}</td>
                          <td><button class="btn btn-danger borrar_elemento">Borrar</button></td>`;
        
        tabla.append( fila );
    }


    let btn_borrar = document.querySelectorAll(".borrar_elemento");

    //console.log(btn_borrar);

    for( let btn of btn_borrar){
        btn.addEventListener("click" , borrar_producto);
    }

}



function borrar_producto(e){

    /*
    console.log("BORRAR ESTE ELEMENTO: ", e.target);
    */
    let abuelo = e.target.parentNode.parentNode;

    let producto_eliminar = abuelo.querySelector("p").textContent;



    function eliminar_producto( producto ){

        return producto.nombre != producto_eliminar
    }


    let resultado_filter = carrito.filter( eliminar_producto );

    carrito = resultado_filter;
    console.log( carrito );


    mostrar_carrito()
    //abuelo.remove();

}







let btn_compra = document.querySelectorAll(".botonCompra");
console.log( btn_compra );


for( let boton of btn_compra ){

    boton.addEventListener("click" , agregar_a_carrito);

}




let btn_carrito = document.getElementById("mostrar_carrito");


btn_carrito.addEventListener("click" , function(){


    let carrito = document.getElementById("carrito");

    if( carrito.style.display != "none"){

        carrito.style.display = "none";
    }
    else{
        carrito.style.display = "block";
    }

})