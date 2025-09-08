const navMenu = document.querySelectorAll('nav a')
const removeActiveClass = () => {
    navMenu.forEach(item => {
        item.classList.remove('active')
    })
}
navMenu.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass()
        item.classList.add('active')
    })
})



// change and save theme to local

const themeBtn = document.querySelector('.theme__btn')
themeBtn.addEventListener('click', () => {
    if(document.body.className == '') {
        document.body.className ='dark'
        localStorage.setItem('portfolio__theme', 'dark')
        themeBtn.innerHTML = '<i class="ph ph-sun"></i>' 
    } else {
        document.body.className =''
        localStorage.setItem('portfolio__theme', '')
        themeBtn.innerHTML = '<i class="ph ph-moon"></i>' 
    }
})

// Get theme from local storage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('portfolio__theme') || ''
    document.body.className = savedTheme
    if (document.body.className == '') {
        themeBtn.innerHTML = '<i class="ph ph-moon"></i>' 
    } else {
        themeBtn.innerHTML = '<i class="ph ph-sun"></i>' 
    }
})