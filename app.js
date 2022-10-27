let navbarEl = document.querySelector("nav");
let heroEl = document.getElementById("hero")

window.addEventListener("scroll",()=>{
if(document.documentElement.scrollTop > 20){
  navbarEl.style.background = "red"
}
})

