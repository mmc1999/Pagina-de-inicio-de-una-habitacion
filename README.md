# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](/capture.png)

### Links


- Live Site URL: [Add live site URL here](https://zealous-wescoff-3da73b.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [javascript](https://javascript.org/) 


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
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
})}
```
En este proyecto aprendi hacer un carrousel de imagenes con javascript

