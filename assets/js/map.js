document.addEventListener("DOMContentLoaded", (e)=>{
    let contact__map = document.querySelector(".contact__map")
    setTimeout(()=>{
        contact__map.innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.5558427384252!2d-75.72948507942917!3d-14.063983037488372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2bdb02af083%3A0xf459f8f69b351df!2sPlaza%20de%20Armas%20de%20Ica!5e0!3m2!1ses-419!2spe!4v1743874575566!5m2!1ses-419!2spe" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        `
    }, 1200)
})