const cloud = document.querySelector('.clouds')

const cloudPos = setInterval(() => {
    if(cloud.classList.value === 'cloud') {
        cloud.classList.remove('cloud')
        cloud.classList.add('clouds')
    } else {
        cloud.classList.remove('clouds')
        cloud.classList.add('cloud')
    }
}, 20000)