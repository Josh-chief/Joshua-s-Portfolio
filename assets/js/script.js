let navLinks = document.querySelectorAll('a.inner-link');

navLinks.forEach((item) => {
    item.addEventListener('click', function () {
        console.log(item)
        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
    })
})


document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function () {
    document.querySelector('#sidebar').classList.toggle('open')
})

var options = {
    strings: ['Mobile Application Developer', 'Back-End web developer', 'App designer'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 10
};

new Typed('.field h2', options);


for (let i = 1; i <= 15; i++) {
    let meteor = document.createElement('span');
    meteor.classList = 'meteor'
    document.querySelector('#home .meteor-shower').append(meteor);
}



const shuffleInstance = new Shuffle(document.querySelector('#project .project-items'), {
    itemSelector: '.item'
});

const filterButtons = document.querySelectorAll('#project .filters button')
filterButtons.forEach((item) => {
    item.addEventListener('click', projectFilter)
})


function projectFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#project .filters button.active');
    activeButton.classList.remove('active');
    clickedButton.classList.add("active");


    shuffleInstance.filter(clickedButtonGroup)

    console.log()
}


var projectModal = new bootstrap.Modal(document.getElementById('projectModal'))
const workElements = document.querySelectorAll("#project .project-items .wrap");

workElements.forEach((item)=>{
    item.addEventListener('click', function(){

        projectModal.show();

    })
})

// const projectModalElement = document.getElementById(' projectModal')
//     projectModal.addEventListener('show.bs.modal',function(event ) {
//     document.getElementById('projectModal').classList.add('blur');
//     document.getElementById('sidebar').classList.add('blur');
// })

// projectModalElement.addEventListener('hide.bs.modal', function (event) {
//     document.getElementById('my_work').classList.remove('blur');
//     document.getElementById('sidebar').classList.remove('blur');
//  })











let testimonialImages = document.querySelectorAll('#testimonial .images img');

testimonialImages.forEach((item, index) => {
    let position = index + 1;
    
    item.addEventListener('click', function() {
        document.querySelector('#testimonial .images img.active').classList.remove('active')
        document.querySelector(`#testimonial .images img:nth-child(${position})`).classList.add('active')

        document.querySelector('#testimonial .comments .item.active').classList.remove('active')
        document.querySelector(`#testimonial .comments .item:nth-child(${position})`).classList.add('active')
    })
})

