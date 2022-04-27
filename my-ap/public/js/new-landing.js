const scrollElements = document.querySelectorAll(".scrollElement");


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
}

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("slideUp");
        }  
    })
}, options);

scrollElements.forEach(animatedElement => {
    observer.observe(animatedElement)
});