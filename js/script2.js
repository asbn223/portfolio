$(window).on('load', function () {
    $('.loader, .inner').fadeOut(3000, function () {
        $('.loader').fadeOut(3500);
    });
});

window.onscroll = function () {
    stickyNav();
}

//Sticky Navbar
function stickyNav() {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector('header').classList.add('fixed-nav');
        } else {
            document.querySelector('header').classList.remove('fixed-nav');

        }
    }
}



//Activating Active selected links
const navbar = document.querySelector('.navbar');
a = navbar.querySelectorAll('a');

a.forEach(function (ele) {
    ele.addEventListener('click', function () {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove('active');
        }
        this.classList.add('active');
        document.querySelector('.navbar').classList.toggle('show');

    });
});



//Changing Portfolio style
const changePort = document.querySelector('#change-portfolio');
changePort.addEventListener('click', function () {
    location.href = '../index.html';
});


//Displaying Menu using Ham Burger
const ham = document.querySelector('.ham-burger');

ham.addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('show');
});
