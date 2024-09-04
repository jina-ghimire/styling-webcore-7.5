new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function clicking(){
    let div=document.querySelector(".brands");
    let button=document.querySelector("#myid");
    
    if( button.innerHTML==="Show All"){
        
        button.innerHTML="Hide";
        div.style.height="600px";
        div.style.overflow ="visible";
    }

     else{
        button.innerHTML="Show All";
        div.style.height="203px";
        div.style.overflow ="auto";        
        }

    }
    
    