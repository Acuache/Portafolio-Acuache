const layout__user_info = document.querySelector(".layout__user-info")
const layout__menu_toggle = document.querySelector(".layout__menu-toggle")
let visible = false;
layout__menu_toggle.addEventListener("click", (e)=>{
    layout__user_info.classList.toggle("layout__user-info--activado")
    if (visible) {
        e.target.innerHTML = `<i class="layout__menu-toggle fa-solid fa-bars"></i>`;
        visible = false
    } else {
        e.target.innerHTML = `<i class="layout__menu-toggle fa-solid fa-xmark"></i>`;
        visible = true
    }
})
window.addEventListener("resize", ()=>{
    let size = parseInt(document.body.clientWidth)
    if (size >= 1080) {
        layout__user_info.classList.remove("layout__user-info--activado");
        visible = false;
    }
})

