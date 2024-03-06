   let img=document.getElementById('quo');
   console.log(img);
   
   let slides=document.getElementsByClassName('quotes');
   console.log(slides);
   let index=0;
   function nextslide(){
	 
	  index++;
	  if(index<slides.length){
	 for(let i=0; i<slides.length; i++){
		slides[i].classList.remove('active');
        slides[i].classList.add('hide');		
	 } 
	 slides[index].classList.remove('hide');
   }else{
	 index=0;
     slides[slides.length-1].classList.remove('active');
	 slides[slides.length-1].classList.add('hide');
	 slides[index].classList.add('active');
	 
   }
   }setInterval(nextslide,2000);
  
   