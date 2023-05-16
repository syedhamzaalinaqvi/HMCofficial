
      /*--section start-- */
      var section1 = querySelector("#section1"); 
      addEventListener('mouseover',()=>{
        
        console.log() ; 
       /* querySelector(".section1").classList.add('active');*/
       section1.style.color="red"; 
       
      }
      )
      
      /*--section start end-- */
      
document.getElementById("noteclose").addEventListener("click", function (){
    document.getElementById("notediv").style.display="none"
    /*--Movile Nav*/

  });
  document.getElementById("fa-bars").addEventListener("click", function(){ 
    document.getElementById("mobilenav").style.marginLeft="0%"
    document.getElementById("mobilenav").style.transition="1.5s%"
  
  })
    
  document.getElementById("closebar").addEventListener("click", function(){
    document.getElementById("mobilenav").style.marginLeft ="-100%"
    document.getElementById("mobilenav").style.transition ="1.5s"
  
  });
  
  /*--Movile Nav End*/
  
  
  
  
  /* Slide show Start*/
  
                      var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 2000);
  
  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }
  /* Slide show END*/
  