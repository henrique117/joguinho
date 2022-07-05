const quadrado = document.querySelector('.quadrado')
const cano = document.querySelector('.cano')

const jump = () => {
    quadrado.classList.add('jump')
    setTimeout(() => {
        quadrado.classList.remove('jump')
    }, 700)
}

const loop = setInterval(() => {

    const canoPos = cano.offsetLeft
    const squarePos = +window.getComputedStyle(quadrado).bottom.replace('px', '')

    if(canoPos <= 50 && canoPos > 0 && squarePos < 50) {
        cano.style.animation = 'none'
        quadrado.style.animation = 'none'
        cano.style.left = `${canoPos}px`
        quadrado.style.bottom = `${squarePos}px`
    }
}, 10)

document.addEventListener('keydown', jump)