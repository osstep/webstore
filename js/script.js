const header = document.querySelector('.header')
const fixedHeader = document.querySelector('.fixed')

window.addEventListener('scroll', () => {
    if (window.scrollY > 140) {
        
        fixedHeader.style.display = 'block'
    }
    if (window.scrollY < 140) {
        
        fixedHeader.style.display = 'none'
    }
})