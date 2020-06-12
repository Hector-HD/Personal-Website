const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li');

    //toggle now
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ``;
            }else{
                link.style.animation = `navListFade 0.5s ease forwards ${index / 7+.5}s`;
            }
        });

        //burger animation
        burger.classList.toggle('toggle')
    });   
}


navSlide();


