function trocarModo(){
    const html = document.documentElement /* Acessa o documento por elemento */
    html.classList.toggle("light") /* Versão mais simples e resumida sobre a condição IF/ELSE aplicada abaixo*/

    //Pega a tag da imagem
    const foto = document.querySelector("#perfil img")     
    
    
    //Regra da substituição da imagem entre os modos light e dark
    if(html.classList.contains('light')){
       foto.setAttribute("src", "./assets/avatar-light.png")
    }
    else{
        foto.setAttribute("src", "./assets/avatar.png")
    }
}