gsap.set('.cursor',{xPercent : -50,yPercent :-50})

let cursor = document.querySelector('.cursor')
let hand = document.querySelector('.hand')
let item = document.querySelector('.owl-carousel')

let mouseX;
let mouseY;

window.addEventListener('mousemove', e =>{
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor , 0.5 , {x:mouseX, y:mouseY})
})

item.addEventListener('mouseenter',()=>{
    // console.log("entered");
    gsap.to(hand,1,{
        scale : 1,
        opacity:1,
        top:'-75px',
        left:'-75px',
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

item.addEventListener('mousemove',()=>{
    // console.log("entered");
    gsap.to(hand,1,{
        x:mouseX,
        y:mouseY
    })
})


item.addEventListener('mouseleave',()=>{
    // console.log("entered");
    gsap.to(hand,0.2,{
        scale : 0,
        opacity:0,
        top:'40',
        left:'40',
        ease: Elastic.easeOut.config(1, 0.3)
    })
})