let mobileMenuInner = document.getElementById('mobile-menu-inner')
let mobileMenuOuter = document.getElementById('mobile-menu')
let mobileTarget = document.querySelector('.mobile-target')
let mobileUl = document.getElementById('mobile-ul')
let navOverlay = document.querySelector('#nav-overlay')
let html = document.querySelector('html')


function launch() {
    if(navOverlay.style.visibility != 'visible'){
        navOverlay.style.visibility = 'visible';
        mobileUl.style.opacity = '1';
        mobileMenuInner.style.visibility = 'visible'
        mobileMenuOuter.style.visibility = 'hidden'
        mobileMenuInner.style.zIndex = '10'
        console.log(mobileMenuOuter.style.visibility)
    } 
}

function close(e) {
    console.log(navOverlay.style.visibility)
    if(navOverlay.style.visibility == 'visible') {
        navOverlay.style.visibility = 'hidden'
        mobileUl.style.opacity = '0'
        mobileMenuInner.style.visibility = 'hidden'
        mobileMenuOuter.style.visibility = 'visible'
        mobileMenuInner.style.zIndex = '-10'
    }
}

mobileTarget.addEventListener('click', launch)
mobileMenuInner.addEventListener('click', close)
mobileUl.addEventListener('click', close)