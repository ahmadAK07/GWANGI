let sub_menu = document.getElementById("sub-menu");
let nav_toggler = document.getElementById("nav-toggler");
let profile_content_nav_toggler = document.querySelector("#profile-content_nav #profile-nav-toggler");
let profile_content_nav = document.querySelector("#profile-content_nav ul");
console.log(profile_content_nav_toggler);

profile_content_nav_toggler.addEventListener("click", (e)=>{
    if(profile_content_nav.classList.contains("links")){
        profile_content_nav.classList.remove("links");
        e.target.style.color = "black"
    }else{
        profile_content_nav.classList.add("links");
        e.target.style.color = "#ff6162"
    }
})

nav_toggler.addEventListener("click", () => {
    if (sub_menu.classList.contains("h-0")) {
        sub_menu.classList.remove("h-0");
        sub_menu.classList.add("h-95vh");
        nav_toggler.classList.add("toggled");
        document.body.style.overflow = "hidden";
    } else {
        sub_menu.classList.remove("h-95vh");
        sub_menu.classList.add("h-0");
        nav_toggler.classList.remove("toggled");
        document.body.style.overflow = "";
    }
});
