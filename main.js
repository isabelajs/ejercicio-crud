const buttonAdds = [...document.getElementsByClassName("button")];

const boards = [...document.getElementsByClassName("tabla")];


buttonAdds.forEach(buttonAdd => {
    buttonAdd.addEventListener("click", ()=>{agregarDatos(buttonAdd)}) 
});

function agregarDatos(buttonAdd){
     let siblings =getSiblings(buttonAdd)

    siblings.forEach(sibling => {
        console.log(sibling.value)         
     });

     console.log("pepe")



     console.log("hello pirilona")
}


let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!e.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = e.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== e) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};





   /*  const names =[...document.getElementsByClassName("input__text")];
    const values =[... document.getElementsByClassName("input__valor")];
    const ids  = [...document.getElementsByClassName("idHidden")]

    let id = parseInt(ids[position].textContent)

    boards[position].innerHTML += `<div name="${id}" class="tabla__row amarillo">
                                        <div>${id}</div>
                                        <div>${name}</div>
                                        <div>${value}</div>
                                        <div><input class="button_remover" type="button" value="X"></div>
                                    </div>`


    let suma = id +1


    ids[position].textContent = suma

 








/* const buttonRemove = document.getElementById("boton__borrar"); */


/* buttonRemove.addEventListener("click", removeSelection )  */



/* function agregarDatos(){

    

    //convierte HTMLCollection en un array
    let buttonsRemove= [...document.getElementsByClassName("button_remover")]; 
    
    buttonsRemove.forEach(button => {

        // button.style.background = "white";
        button.addEventListener("click",function(){seleccionarDatos(button)})
    }); 
}
 */


/* function borrarDatos(evento){
    evento.path[2].remove();

    // button.parentNode.parentNode.remove()
} */

/* function seleccionarDatos(button){
    let row = button.parentNode.parentNode;
    // evalua si esta la clase, si existe la borra sino esta la agrega
    row.classList.toggle("selection"); 

}

function removeSelection(){
    let rows = [...document.getElementsByClassName("selection")]
    rows.forEach(   row => {  row.remove() }    )
} */

