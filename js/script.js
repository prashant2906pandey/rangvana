console.log("Rangvana Website Loaded Successfully 🚀");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("open");
});

// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");

let currentImage = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentImage=index;
        showImage();

        lightbox.classList.add("active");

    });

});

function showImage(){

    lightboxImg.src=galleryImages[currentImage].src;

}

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.classList.remove("active");

    }

});
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");

next.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    showImage();

});

prev.addEventListener("click",(e)=>{

    e.stopPropagation();

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    showImage();

});

// Keyboard Controls

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        currentImage++;

        if(currentImage>=galleryImages.length){
            currentImage=0;
        }

        showImage();

    }

    if(e.key==="ArrowLeft"){

        currentImage--;

        if(currentImage<0){
            currentImage=galleryImages.length-1;
        }

        showImage();

    }

    if(e.key==="Escape"){

        lightbox.classList.remove("active");

    }

});
AOS.init({
    duration:1000,
    once:true
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{
        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });

});
const classForm = document.querySelector("#classForm");
const successMsg = document.querySelector("#successMsg");


if(classForm){

classForm.addEventListener("submit",(e)=>{

    e.preventDefault();


    const name = document.querySelector("#name").value;


    successMsg.innerHTML =
    `Thank you ${name}! Your class booking request has been received 🎨`;


    classForm.reset();


});

}