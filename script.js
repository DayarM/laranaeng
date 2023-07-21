function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute('src', './assets/lara-light.png')
        img.setAttribute('alt','"Foto da criadora de conteúdo Lara Rocha com cabelo ruivo, fundo cinza, mão no rosto com um lindo sorriso, usando óculos de grau."')
    }else{
        img.setAttribute('src', './assets/lara-dark.png')
        img.setAttribute('alt','"Foto da criadora de conteúdo Lara Rocha com cabelo preto, fundo preto e usando óculos de grau."')
    }

}