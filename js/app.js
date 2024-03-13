const navContainer = document.querySelector('.nav-container');
const menuBtn = document.querySelector('.menu-toggle-btn');
const body = document.body;
const navLogo = document.querySelector('.nav-logo');
const socialLinks = document.querySelectorAll('.nav-socials a');
const navSocials = document.querySelectorAll('.nav-socials a');
const navLinks = document.querySelectorAll('.nav-link a');
const navBar = document.querySelector('.navbar');
const navFooterLinks = document.querySelectorAll('.nav-footer a');
const originalLogo = document.querySelector('.original-logo')
const whiteLogo = document.querySelector('.white-logo')



const tl = gsap.timeline({ paused: true });

// Initial circular shape
const circularPath = "M50,10a40,40 0 1,0 80,0a40,40 0 1,0 -80,0";

// Target shape (rectangle)
const targetPath = "M0,0 L100,0 L100,100 L0,100 Z";

tl.to('.nav-logo', { y: -4, duration: 0.5, ease: 'power2.inOut' })
    .from('.nav-container', { morphSVG: circularPath, opacity: 0, duration: 0.5, ease: 'power2.inOut' }, '-=0.5')
    .to('.nav-container', { morphSVG: targetPath, opacity: 1, duration: 0.5, ease: 'power2.inOut' }, '-=0.5');

function toggleMenu() {
    navContainer.classList.toggle('active');
    menuBtn.style.backgroundColor = navContainer.classList.contains('active') ? "#F0F3BD" : "";

    if (navContainer.classList.contains('active')) {
        tl.play();
        body.classList.add('menu-active');
        originalLogo.style.display = 'none';
        whiteLogo.style.display = 'block';
        navBar.style.backgroundColor = "#006D77"
        // Change the background color of the navbar to black when the menu is opened
        gsap.to('.navbar', { duration: .5, backgroundColor: '#000000', });
    } else {
        tl.reverse();
        body.classList.remove('menu-active');
        // Revert the background color of the navbar to its default color when the menu is closed
        gsap.to('.navbar', { duration: .5, backgroundColor: '' });
        originalLogo.style.display = 'block';
        whiteLogo.style.display = 'none';
        navBar.style.backgroundColor = "#F0F3BD"
    }

    const socialsTimeline = gsap.timeline();
    navSocials.forEach((item, index) => {
        socialsTimeline.fromTo(item,
            { opacity: 0, y: 0 },
            { opacity: 1, y: -20, duration: 0.5, delay: index * 0.1, ease: "back.out" }
        );
    });

    const linksTimeline = gsap.timeline();
    navLinks.forEach((item, index) => {
        linksTimeline.fromTo(item,
            { opacity: 0, y: 0 },
            { opacity: 1, y: -20, duration: 0.5, delay: index * 0.1, ease: "back.out" }
        );
    });

    const navFooterTimeline = gsap.timeline();
    navFooterLinks.forEach((item, index) => {
        navFooterTimeline.fromTo(item,
            { opacity: 0, y: 0 },
            { opacity: 1, y: -20, duration: 0.5, delay: index * 0.1, ease: "back.out" }
        );
    });

   
    
}

menuBtn.addEventListener('click', toggleMenu);


const scrolltl = gsap.timeline()

window.addEventListener('scroll',()=>{
    const scrollPosition = window.scrollY;
    // console.log(scrollPosition);

    const threashold = 100;

    if (scrollPosition > threashold) {
        originalLogo.style.display = 'none';
        whiteLogo.style.display = 'block';
        navBar.style.transition = 'background-color 0.5s ease-in';
        navBar.style.backgroundColor = "#006D77";
    } else {
        originalLogo.style.display = 'block';
        whiteLogo.style.display = 'none';
        navBar.style.transition = 'background-color 0.5s ease-in';
        navBar.style.backgroundColor = "#F0F3BD";
    }

})