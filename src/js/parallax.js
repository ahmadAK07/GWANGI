// import SimpleParallax from "../../node_modules/simple-parallax-js/dist/vanilla";
// console.log(SimpleParallax)
var image = document.querySelectorAll(".image-parallax");
// new simpleParallax(image[0], {
//     orientation:"right"
import SimpleParallax from "../../node_modules/simple-parallax-js/dist/vanilla/simpleParallaxVanilla.es.js";

image.forEach((img)=>{
    new SimpleParallax(img)
})
window.addEventListener("scroll", ()=>{
    document.querySelectorAll(".simple-parallax-initialized").forEach((item)=>{
        item.style.overflowY = "visible" ;
        item.style.overflowX = "visible" ;

    })


})