//animação dos botões de mídias social
VanillaTilt.init(document.querySelectorAll(".ani"), {
    max: 50,
    speed: 800,
    glare:true,
    "max-glare": 2,
});

//Efeito portifólio
VanillaTilt.init(document.querySelectorAll(".js-ani-port"), {
    max: 40,
    speed: 1000,
    glare:true,
    "max-glare": 2,
});

//efeito máquina de escrever
const typeWriter = (element) => {
    const textArray = element.innerHTML.split('')
    
    element.innerHTML=''
    
    textArray.forEach((letter, idx) => {
        setTimeout(() => element.innerHTML += letter, 150 * idx)})
}

const title = document.querySelector("#titulo_principal")

typeWriter(title)



//carousel
const carousel = document.querySelector(".js-carousel")

new Glider(carousel , {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    arrows: {
        prev: '.js-carousel-prev',
        next: '.js-carousel-next'
    }
});

//animação de scroll CONHECIMENTOS

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const cont = document.querySelectorAll("[data-animated]")
const anime = 'anime'

const animetaionScroll = () => {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
    cont.forEach((element) => {
        if((windowTop) > element.offsetTop){
            element.classList.add("anime")
        }
    })
}

if(cont.length){
    
    window.addEventListener('scroll', debounce(() => {
        animetaionScroll()
        console.log()
    }))

}
