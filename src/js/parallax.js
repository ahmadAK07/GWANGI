
var image = document.querySelectorAll(".image-parallax");

import SimpleParallax from "./vanilla/simpleParallaxVanilla.es.js";

image.forEach((img, i)=>{
    new SimpleParallax(img, {
        delay: image.length == 1 ? .8 : .1,
        orientation: image.length == 1 ? "up" : "down"
    })
})
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".simple-parallax-initialized").forEach((item)=>{
        item.style.overflowY = "visible" ;
        item.style.overflowX = "visible" ;

    })


})