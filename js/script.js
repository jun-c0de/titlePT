const header = document.querySelector('header')
const navBtn= document.querySelector('.nav-btn')
const scrollTopBtn = document.querySelector('.scroll-top-btn')
const menuLinks=document.querySelectorAll('.menu-link')


menuLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault()

        const targetId=link.getAttribute('href').substring(1)
        const targetElement = document.getElementById(targetId)
        console.log(targetId)
        if(targetElement){
            window.scrollTo({
                top:targetElement.offsetTop,
                behavior:'smooth'
            })
        }

    })
})

scrollTopBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})

navBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('click');
    header.classList.toggle('open');
})

window.addEventListener('scroll',()=>{
    let i = window.scrollY;
    console.log(i);

    if(i > 100){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
})

