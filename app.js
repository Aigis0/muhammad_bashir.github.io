/*SHOW MENU*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose  = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*REMOVE MENU MOBILE*/
document.addEventListener('DOMContentLoaded', () => {
    const navLink = document.querySelectorAll('.nav_link');

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    };

    navLink.forEach(n => n.addEventListener('click', linkAction));
});

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadowHeader')
                        : header.classList.remove('shadowHeader')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact_form'),
        contactMessage = document.getElementById('contact_message')

        const sendEmail = (e) =>{
            e.preventDefault()

            // serviceID - TemplateID - #form - publicKey
            emailjs.sendForm('service_8epr84r','template_8rllnno','#contact_form', '5WpcsCxeyZu3n8IRS')
            .then(() =>{
                //show sent message
                contactMessage.textContent = 'message sent successfully ✅'

                //remove sent message
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000);

                //clear input field
                contactForm.reset(); 
            }, () =>{
                //show error message
                contactMessage.textContent = 'Message not sent (service error) ❌'
            })
        }
        
    contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll_up')
    //when scroll is higher than 30 viewport hiegth add the scroll
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelectorAll('.nav_menu a[href*=' + sectionId + ']')

            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }
            else{
                sectionsClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== DARK MODE THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

