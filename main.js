
   
   
   /*--section start-- 

      var punjabi_section = document.querySelector("#pagepunjabi").addEventListener('click', function(){
         classList.add('active-section');

   });
   
   
    /*--section  end-- */
   

/*----------------------Movile Nav----------------------------------------------*/

document.getElementById("fa-bars").addEventListener("click", function(){ 
  document.getElementById("mobilenav").style.marginLeft="0%"
  document.getElementById("mobilenav").style.transition="0.5s%"

})
  
document.getElementById("closebar").addEventListener("click", function(){
  document.getElementById("mobilenav").style.marginLeft ="-100%"
  document.getElementById("mobilenav").style.transition ="1.5s"

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
noteclose.addEventListener('click',()=>{
document.querySelector("#notediv").style.display="none";
})


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
  })
//==========Search Filter JS End=====================

//==========Search bar removed start=====================
let searchbox = document.getElementsByClassName("searchbox");
 searchbox.style.display="none";
//==========Search bar removed End=====================

//==========add adsterra link  start=====================
var head = document.getElementsByTagName('head');

var header = head.classList.add("header");


//==========add adsterra link End=====================
