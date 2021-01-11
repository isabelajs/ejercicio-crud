
const buttonAdds = [...document.getElementsByClassName("button")];


buttonAdds.forEach(buttonAdd => {
    buttonAdd.addEventListener("click", ()=>{agregarDatos(buttonAdd)}) 
});

function agregarDatos(buttonAdd){
    const componenteFormulario = buttonAdd.parentNode
    const componenteGeneral = componenteFormulario.parentNode           //todo el componente que contiene el formulario, tabla, etc....
    const listaComponentesGeneral = componenteGeneral.childNodes        //lista de subcomponentes "formulario", "tabla"
    const listaComponentesFormulario = componenteFormulario.childNodes

    const inputTexto = nodeByTag(listaComponentesFormulario,"text")
    const inputValue = nodeByTag(listaComponentesFormulario, "value")


    const componenteTabla = nodeByTag(listaComponentesGeneral, "tabla")
    const componenteId = nodeByTag(listaComponentesGeneral, "contador")
    

    let idActual = parseInt(componenteId.textContent);


    componenteTabla.innerHTML += `<div name="${idActual}" class="tabla__row amarillo">
                                        <div>${idActual}</div>
                                        <div>${inputTexto.value}</div>
                                        <div>${inputValue.value}</div>
                                        <div><input name="button-option" class="button_remover" type="button" value="X"></div>
                                    </div>` 
    
    componenteId.textContent = idActual + 1

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


function nodeByTag (lista,tagName){
    //htmlcollection to list
    var list = [...lista]

    for(index in list){
        var nodo = list[index]

        if(nodo.nodeType === 1 && nodo.getAttribute("name") == tagName ){

            return nodo
        }

    }


}


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

