let acc = document.getElementsByClassName("accordion");
let panel = document.getElementsByClassName('panel');
let img_arrow = document.getElementsByClassName('arrow_accordion_img');

for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      let setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        setClass(img_arrow, 'arrow_accordion_img_no_active', 'remove');
        setClass(img_arrow, 'arrow_accordion_img_active', 'add');
        
        if (setClasses) {
            img_arrow[i].classList.add("arrow_accordion_img_no_active");
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (let i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

const menuLinks = document.querySelectorAll('.list-menu a[href^="#"]');

const config = {
  root: document,
  rootMargin: '-50% 0% -50% 0%',
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.list-menu a[href="#${id}"] span`);
      if (entry.isIntersecting) {
        console.log("menuLink " + menuLink.id);
        menuLink.classList.add("list-menu-active");
        if(window.innerWidth <= 500){
            let listaMenu = document.getElementById("list-menu");
            clearAncles(listaMenu);
            switch (menuLink.id) {
              case "gamium_span":
                listaMenu.classList.add("ancle_gamium");
              break;
              case "theAvatar_span":
                listaMenu.classList.add("ancle_avatar");
              break;
              case "theMetaverse_span":
                listaMenu.classList.add("ancle_metaverse");
              break;
              case "tokens_span":
                listaMenu.classList.add("ancle_tokens");
              break;
              case "lands_span":
                listaMenu.classList.add("ancle_lands");
              break;  
            
              default:
                break;
            }
        }
      } else {
        menuLink.classList.remove("list-menu-active");
      }
    });
  },
  config
);

function clearAncles(element){
  element.classList.remove("ancle_gamium");
  element.classList.remove("ancle_avatar");
  element.classList.remove("ancle_metaverse");
  element.classList.remove("ancle_tokens");
  element.classList.remove("ancle_lands");
}

menuLinks.forEach((menuLink) => {
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

window.addEventListener("resize", ()=>{
  let elementCopy = document.getElementById("id_btn_launch_app-mobile");
  let elementPaste = document.getElementById("burguer-resize");
  elementPaste.style.width = elementCopy.offsetWidth + "px" ; 
});

setTimeout(() => {
  let elementCopy = document.getElementById("id_btn_launch_app-mobile");
  let elementPaste = document.getElementById("burguer-resize");
  elementPaste.style.width = elementCopy.offsetWidth + "px" ; 
}, 700);


