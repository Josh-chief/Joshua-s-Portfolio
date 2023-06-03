let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((item) => {
    item.addEventListener('click', function(){
        document.querySelector('nav ul li a.active').classList.remove('active')
        item.classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
    })
})