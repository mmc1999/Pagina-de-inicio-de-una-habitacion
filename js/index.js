const $section = document.querySelectorAll(".imagenMobile[data-divya]"),
    $imagenPc = document.querySelectorAll(".imagenParaPc[data-divya]"),
    $div = document.querySelectorAll(".divh2CompraYa[data-divya]"),
    $btnprev = document.querySelector(".izquierda"),
    $btnnex = document.querySelector(".derecha"),
    $botonBurguerAbrir = document.querySelector(".botonBurguerAbrir"),
    $botonBurguerCerrar = document.querySelector(".botonBurguerCerrar");

let i = 0;
console.log($imagenPc, $section)

document.addEventListener("click", e => {
    if (e.target === $btnprev) {
        e.preventDefault();
        $section[i].classList.remove("active");
        $imagenPc[i].classList.remove("active");
        $div[i].classList.remove("active");
        i--;
        if (i < 0) {
            i = $section.length - 1;
        }
        $section[i].classList.add("active");
        $imagenPc[i].classList.add("active");
        $div[i].classList.add("active");
    }
    if (e.target === $btnnex) {
        e.preventDefault();
        $section[i].classList.remove("active");
        $imagenPc[i].classList.remove("active");
        $div[i].classList.remove("active");
        i++;
        if (i >= $section.length) {
            i = 0;
        }
        $section[i].classList.add("active");
        $imagenPc[i].classList.add("active");
        $div[i].classList.add("active");
    }
    /* BOTON HAMBURGUESA */
    if(e.target.classList.contains("iconoHambuerguesa")){
        document.querySelector(".botonBurguerAbrir").classList.remove("active")
        document.querySelector(".botonBurguerCerrar").classList.add("active")
        document.querySelector(".navCelu").classList.add("active1");
    }
    if(e.target.classList.contains("iconoHambuerguesaCierre")){
        document.querySelector(".botonBurguerAbrir").classList.add("active")
        document.querySelector(".botonBurguerCerrar").classList.remove("active")
        document.querySelector(".navCelu").classList.remove("active1");
    }
    console.log(i)
})
