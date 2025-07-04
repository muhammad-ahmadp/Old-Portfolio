const toggle = document.getElementById('theme-toggle');
const navbar = document.querySelector('.navbar');
const boxes = document.querySelectorAll('.boxes');
const exboxes = document.querySelectorAll('.exbox');
const probox = document.querySelectorAll('.probox');

toggle.addEventListener('change', function () {
    if (this.checked) {
        document.body.style.backgroundColor = 'rgb(24, 25, 26)';
        document.body.style.color = '#777';
        navbar.style.backgroundColor = 'rgb(24, 25, 26)';
        navbar.style.boxShadow = '0 0 5px rgba(121, 121, 121, 0.15)';
        navbar.classList.add('dark-mode');

        // Apply dark mode shadow to all '.boxes'
        boxes.forEach(box => {
            box.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
            box.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        });

        // Apply dark mode shadow to all probox
        probox.forEach(probox=> {
            probox.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
            probox.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        })

        // Apply dark mode shadow to all '.exbox'
        exboxes.forEach(exbox => {
            exbox.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
            exbox.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        });

    } else {
        document.body.style.backgroundColor = '#f1f5f9';
        document.body.style.color = '#1e293b';
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
        navbar.classList.remove('dark-mode');

        // Apply light mode shadow to all '.boxes'
        boxes.forEach(box => {
            box.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            box.style.border = 'none';
        });

        // Apply light mode shadow to all '.exbox'
        exboxes.forEach(exbox => {
            exbox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            exbox.style.border = 'none';
        });
        // Apply light mode shadow to all probox
        probox.forEach(probox => {
            probox.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            probox.style.border = 'none'
        })
    }
});


const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.header__menu');
const links = document.querySelectorAll('.header__link');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
// Close menu when clicking a link
links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});