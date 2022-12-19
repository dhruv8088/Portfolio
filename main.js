// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 


function sendMail() {
    var params = {
      name: document.getElementById("Name").value,
      name: document.getElementById("Phone").value,
      email: document.getElementById("Sender").value,
      message: document.getElementById("Message").value,
    };
  
    const serviceID = "service_s2xtmti";
    const templateID = "template_0iqo5so";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("Name").value = "";
          document.getElementById("Phone").value = "";
          document.getElementById("Sender").value = "";
          document.getElementById("Message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }


  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    loop:true,
  });