
//document.body.style.backgroundImage = "none";


/*----------------Addding Downloading Server Gif-image----------------------*/ 
/*
var downloadingContent = document.querySelectorAll(".downloading-container-content");
var server_gif = document.write('<div class="downloading-server-animation-div"><img class="downloading-server-animation-gif" src="webpic/loading_server_animation.gif" alt="downloading Server loading..."></div>');
let LoadingAnimation = server_gif.appendTo(downloadingContent);
LoadingAnimation.style.display= "none";
LoadingAnimation.style.display= "block";
*/ 

//========Detail container adding id 
var detailContainer = document.querySelector(".detail-container");
detailContainer.setAttribute("id","detail-container");
   

//============= Downloading Cntainer ===============

var go_to_download = document.getElementById("go-to-download");
   const downloading_container = document.getElementById("d-container");
   go_to_download.addEventListener("click", () => {
     downloading_container.style.display = "block";
     
    
    });
   const close_downloading_container = document.getElementById("close-downloading-container").addEventListener("click", () => {
     downloading_container.style.display = "none";
   
   });




   /*----------------------Movile Nav----------------------------------------------
   
       document.getElementById("fa-bars").addEventListener("click", function () {
         document.getElementById("mobilenav").style.marginLeft = "0%";
         document.getElementById("mobilenav").style.transition = "0.5s%";
   
       });
   
       document.getElementById("closebar").addEventListener("click", function () {
         document.getElementById("mobilenav").style.marginLeft = "-100%"
         document.getElementById("mobilenav").style.transition = "1.5s"
   
       });
       /*--Movile Nav End*/

       

/*----------------Addding Body background image end----------------------*/ 
var h1 = document.getElementsById("h1").remove();
console.clear();

const detail_container = document.getElementById("detail-container");
document.getElementById("go-to-download").innerText='Download';
const detail_container_content = document.querySelector(".downloading-container-content");
/*
var adding_server_animation_image ='<div class="downloading-server-animation-div"><img class="downloading-server-animation-gif" src="web1pic/loading_server_animation.gif" alt="downloading Server loading..."></div>'; 
detail_container_content.
*/
//.document.querySelector(".downloading-links").document.getElementByTagName('h3').innerHTML = adding_server_animation_image.add.classList('downloading-server-animation-div');
console.log(detail_container_content) ;
//.innerText = "HamzaMoviesClub";
//innerText = " HamzaMoviesClub";
/*--section start-- 

   var punjabi_section = document.querySelector("#pagepunjabi").addEventListener('click', function(){
      classList.add('active-section');

});
 
 
 /*--section  end-- */


/*----------------------Movile Nav----------------------------------------------*/

document.getElementById("fa-bars").addEventListener("click", function () {
  document.getElementById("mobilenav").style.marginLeft = "0%"
  document.getElementById("mobilenav").style.transition = "0.5s%"

})

document.getElementById("closebar").addEventListener("click", function () {
  document.getElementById("mobilenav").style.marginLeft = "-100%"
  document.getElementById("mobilenav").style.transition = "1.5s"

});
//--Movile Nav End




// Slide show Start

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
// Slide show END

let noteclose = document.getElementById("noteclose");
noteclose.addEventListener('click', () => {
  document.querySelector("#notediv").style.display = "none";
});


//Slide show end



//==========Search Filter JS Start=====================



var filter = document.getElementById('myInput');
filter.addEventListener('blur',()=>{
  filter.style.border='1px solid blue';
})
filter.addEventListener('focus',()=>{
  filter.style.border='1px solid green';
})
 filter.addEventListener('keyup', () =>{
let searchbar  = filter.value.toUpperCase();
let Allmovies = document.getElementById('all_movies');
let movie1= Allmovies.getElementsByClassName('movie1');

for(var i = 0; i < movie1.length ; i++ ){

let link= movie1[i].getElementsByTagName('a')[0];    
  let textvalue =  link.textContent || link.innerText ;   
  if(textvalue.toUpperCase().indexOf(searchbar) > -1 ){
    movie1[i].style.display= ""; 
   }else{
    movie1[i].style.display="none";
   }
 }
  });
//==========Search Filter JS End=====================

//==========add adsterra link  start=====================
/*var head = document.getElementsByTagName('head');
var header = head.classList.add("header");
*/
//==========add adsterra link End=====================


//============= Downloading Container ===============

/*
var go_to_download = document.getElementById("go-to-download");
const downloading_container = document.getElementById("d-container");
go_to_download.addEventListener("click", () => {
  downloading_container.style.display = "block";
});
const close_downloading_container = document.getElementById("close-downloading-container").addEventListener("click", () => {
  downloading_container.style.display = "none";

});
*/
/* -------------------Load more js start--------*/
 /*var load_more_p1 = document.getElementsById('load-more-btn');
 load_more_p1.addEventListener("click",() =>{
  document.getElementById('all_movies').style.height="3000px";
 });*/
 var Allmovies = document.querySelector("#all_movies");
 var load_more_btn1 = document.getElementById('load-more-btn1');
 var load_more_btn2 = document.getElementById('load-more-btn2');
 var load_more_btn3 = document.getElementById('load-more-btn3');
 var load_more_btn4 = document.getElementById('load-more-btn4');
 var load_more_btn5 = document.getElementById('load-more-btn5');
 var load_more_btn6 = document.getElementById('load-more-btn6');

 function load_more_p1(){
           Allmovies.style.height= "5760px";
           load_more_btn1.style.display="none";
           load_more_btn2.style.display="block";
           load_more_btn3.style.display="none";
           load_more_btn4.style.display="none";
           load_more_btn5.style.display="none";
           load_more_btn6.style.display="none";
         }
         function load_more_p2(){
           document.getElementById('all_movies').style.height = '8640px';
           load_more_btn1.style.display="none";
           load_more_btn2.style.display="none";
           load_more_btn3.style.display="block";
           load_more_btn4.style.display="none";
           load_more_btn5.style.display="none";
           load_more_btn6.style.display="none";
         }
         function load_more_p3(){
           document.getElementById('all_movies').style.height = '11520px';
           load_more_btn1.style.display="none";
           load_more_btn2.style.display="none";
           load_more_btn3.style.display="none";
           load_more_btn4.style.display="block";
           load_more_btn5.style.display="none";
           load_more_btn6.style.display="none";
         }
         function load_more_p4(){
           document.getElementById('all_movies').style.height = '11520px';
           load_more_btn1.style.display="none";
           load_more_btn2.style.display="none";
           load_more_btn3.style.display="none";
           load_more_btn4.style.display="none";
           load_more_btn5.style.display="block";
           load_more_btn6.style.display="none";
         }
;







