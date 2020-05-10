let time = 3500, currentIndexImage = 0

images = document.querySelectorAll('nav#slider img')

const max = images.length

function slider() {
    images[currentIndexImage].classList.remove('selected')

    currentIndexImage++

    if(currentIndexImage >= max) currentIndexImage = 0
    images[currentIndexImage].classList.add('selected')
}

function start() {
    setInterval(() => {
        slider()
    }, time)    
}

window.addEventListener('load', start)