
const buttonAdds = [...document.getElementsByClassName("button")];
const buttonsDelete = [...document.getElementsByClassName("boton__borrar")];

buttonAdds.forEach(buttonAdd => {
    buttonAdd.addEventListener("click", ()=>{agregarDatos(buttonAdd)}) 
});


buttonsDelete.forEach(buttonDelete =>{
    buttonDelete.addEventListener("click", () => {borrar(buttonDelete)})
})

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


    let divFila= crearElemento("div","tabla__row amarillo",[["name",`${idActual}`]])

    let divId = crearElemento("div",undefined,undefined,`${idActual}`)
    let divText = crearElemento("div",undefined,undefined,`${inputTexto.value}`)
    let divValue = crearElemento("div",undefined,undefined,`${inputValue.value}`)
    let divContenedorButton = crearElemento("div",undefined,undefined,)
    let button = crearElemento("input","button_remover",[["type","button"],["name","button-option"],["value","x"]])
    
    divContenedorButton.appendChild(button)

    button.addEventListener("click", () => {seleccionar(divFila)});
    
    addChildrens(divFila,[divId,divText,divValue,divContenedorButton])

    componenteTabla.appendChild(divFila)

    componenteId.textContent = idActual + 1

}   


function seleccionar(fila){

    fila.classList.toggle("selection")
    
}

function borrar(buttonDelete){
    let componenteTabla = nodeByTag(buttonDelete.parentNode.parentNode.childNodes, "tabla")
    let filas = [...componenteTabla.childNodes]

    for (index in filas){
        let fila = filas[index]
        if (fila.nodeType == 1 && fila.classList.contains("selection")){
            componenteTabla.removeChild(fila)

        }
    }
}


function addChildrens(parent,childrens){
    for(index in childrens){
        let child = childrens[index]
        parent.appendChild(child)
    }
}

//
function crearElemento(type,className,atributos,text){
    let elemento = document.createElement(type);

    if(className !== undefined){
        elemento.className = className;
    }
    if(atributos !== undefined && typeof Array){

        for(index in atributos){
            let atributo = atributos[index]

            elemento.setAttribute(atributo[0],atributo[1]);
        }


        
    }
    
    elemento.textContent = text

    return elemento
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
