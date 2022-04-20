const sliderFotos = ['resort0.png','resort1.jpg','resort2.jpg','resort3.jpg']
const prefix = "url('../img/resorts"
const extension = 'jpg'
const setas = [... document.getElementsByClassName('seta')] 
const sliderContainer = [... document.getElementsByClassName('sliderContainer')][0]

setas.forEach(e => {
    e.addEventListener('click', handleSlider)
})

/**
 * Função que controla o slider
 */
function handleSlider(){
    /**
     * Pega foto selecionada
     */
    let currentPhoto    = getCurrentPhoto(sliderContainer)
    
    /**
     * Verifica qual seta foi clicada
     */
    let hasBack         = this.children[0].name.indexOf('back') > -1 ? true : false

    /**
     * Seleciona função que retorna o indice da proxima foto de acordo com a seta que foi clicada
     */
    let proximaFoto     = hasBack ? previousPhoto(currentPhoto) : nextPhoto(currentPhoto)

    /**
     * Função que renderiza a proxima fotos
     */
    setProximaFoto(proximaFoto, sliderContainer)
}


/**
 * @param {div} sliderContainer 
 * @return indexOfSlider  sliderFotos 
 */
function getCurrentPhoto(sliderContainer){
    return sliderContainer.style.backgroundImage.split('resort')[2].split('')[0]
}

/**
 * Analisa a proxima foto considerando o lenght do array que tem as fotos
 * @param {str} indexCurrentPhoto 
 * @return str previous Photo
 */
function nextPhoto(indexCurrentPhoto){
    return indexCurrentPhoto == (sliderFotos.length -1) ? 0 : ++indexCurrentPhoto
}

/**
 * Analisa a foto anterior considerando o lenght do array que tem as fotos
 * @param {str} indexCurrentPhoto 
 * @return str previous Photo
 */
function previousPhoto(indexCurrentPhoto){
    return indexCurrentPhoto == 0 ? (sliderFotos.length -1) : --indexCurrentPhoto 
}

/**
 * 
 * @param {number} index da proxima foto
 * @param {div} sliderContainer 
 */
function setProximaFoto(index, sliderContainer){
    sliderContainer.style.backgroundImage = `${prefix}/${sliderFotos[index]}')`
}