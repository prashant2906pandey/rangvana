console.log("Rangvana Website Loaded Successfully 🚀");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
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