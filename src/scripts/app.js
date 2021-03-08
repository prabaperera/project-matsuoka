
const translates = document.querySelectorAll(".translate");
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;

    translates.forEach(element => {
        let speed = element.dataset.speed;
        let movingSpeed = element.dataset.movespeed;
        let v = (scroll * speed ) + 'px'
        element.style.transform = `translateY(${scroll * speed - 300}px)`;
        element.style.bottom = `${scroll * movingSpeed -600}px`

    })
});

const mask = document.getElementById("el");
window.addEventListener("scroll", () => {

    let scroll = window.pageYOffset;
    
        var cssAnimation = document.createElement('style');
        cssAnimation.type = 'text/css';
        let movingSpeed = mask.dataset.movespeed;
        let position = scroll * movingSpeed;
        
        console.log(position)
        var rules = document.createTextNode('@keyframes clip-fade {'+
        '100% {'+
          '-webkit-mask-position-y: '+ ( (-1 *position + 300))+'px; '+
        '}'+
      '}');
        cssAnimation.appendChild(rules);
        document.getElementsByTagName("head")[0].appendChild(cssAnimation);

        mask.className ='baby el';
        
});