
window.addEventListener("scroll",()=>{
    const headers=document.getElementById("header");
    headers.classList.toggle("active",window.scrollY>0)
})

