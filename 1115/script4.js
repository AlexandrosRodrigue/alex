
let resultado = document.getElementById("divResultado")

function acharQuadrante(){
   let coordenadaX = Number(document.getElementById("inpX").value)
   let coordenadaY = Number(document.getElementById("inpY").value)

    if (coordenadaX>0 && coordenadaY>0) {
        resultado.innerHTML = "Está no primeiro quadrante"
    
    }else if(coordenadaX<0 && coordenadaY>0){
         resultado.innerHTML = "Está no segundo quadrante"
   
    }else if(coordenadaX<0 && coordenadaY<0){
        resultado.innerHTML = "Está no terceiro quadrante"
    
    }else if(coordenadaX>0 && coordenadaY<0){
        resultado.innerHTML = "Está no quarto quadrante"
    }else{
    resultado.innerHTML = "Valores invalidos "
    }
}