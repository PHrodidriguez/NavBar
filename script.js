window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolar',window.scrollY > 0)

})