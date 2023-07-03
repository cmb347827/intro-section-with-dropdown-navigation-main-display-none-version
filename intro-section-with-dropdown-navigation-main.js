'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Overlay': 'hsla(8, 24%, 2%, 0.5)',
};

$(window).resize(function(){
	location.reload();
});

let toggleCounter= 0;
const openToggle = function(){
    
   let width = $(window).width();
   try{
       if(width < 1440){
			  ++toggleCounter;
			  if(toggleCounter % 2 ){
				  //counter is odd.
				  //menu is collapsed. Hide the hamburger ,show the close image, and open the menu
				  $('.hamburger').hide();
			      $('.close').css({'display':'block','position':'relative','z-index':'2'}).show();
				  $('main').css({'background-color':colors['Overlay'],'opacity':'0.5'});
				  //changed the position, width, and height here from other 'project-tracking-intro-component-master' project code.
			      $('.dropdown').css({'background':colors['Almost White'],'display':'block','position':'absolute','top':'-10px','left':'1%','z-index':'1','height':'100vh','width':'300px','text-align':'center'});  
				  $('.dropdown').attr({'aria-expanded':'true','aria-hidden':'false'});
				  $('.item').hover(function(){
					  $(this).css('background-color',colors["Lighter Gray"]);
				  });
				  $('.item').mouseleave(function(){
					  $(this).css('background-color',colors["White"]);
				  });
				  
			  } else{
				  //with even click menu will be closed
				  $('main').css({'background-color':colors['Almost White'],'opacity':'1'});
				  $('.close').css('display','none').hide();
				  //changed the position here from the other project code.
			      $('.hamburger').show();
				  if(width < 1440){
			         $('.dropdown').css('display','none').hide();
					 $('.dropdown').attr({'aria-expanded':'false','aria-hidden':'true'});
				  }
			  }
        }
    }catch(error){
	    document.getElementById("error").innerHTML = error.message;
		$('.dropdown').css('display','none').hide();
	}
};

let featureToggle=0;
const openFeatures = function(){
	
	++featureToggle;
	if(featureToggle % 2 ){
		$('.features-close').css('visibility','visible').show('slow');
		$('.features-open').css('visibility','hidden').hide();
		$('.features-ul').css({'display':'block','border-radius':'10px'}).show();
		$('.features-ul').attr({'aria-expanded':'true','aria-hidden':'false'});
	}else {
		$('.features-close').css('visibility','hidden').hide();
		$('.features-open').css('visibility','visible').show('slow');
		$('.features-ul').hide();
	    $('.features-ul').attr({'aria-expanded':'false','aria-hidden':'true'});
	}
};

let companyToggle=0;
const openCompany = function(){
	 
	 ++companyToggle;
	 if(companyToggle % 2 ){
		$('.company-close').css('visibility','visible').show('slow');
		$('.company-open').css('visibility','hidden').hide();
		$('.company-ul').css({'display':'block','border-radius':'10px'}).show();
	    $('.company-ul').attr({'aria-expanded':'true','aria-hidden':'false'});
     }else {
		$('.company-ul').hide();
	    $('.company-ul').attr({'aria-expanded':'false','aria-hidden':'true'});
		$('.company-close').css('visibility','hidden').hide();
		$('.company-open').css('visibility','visible').show('slow');
		
	}
	
};
const onClick = (selector, handler) => {
  document.querySelector(selector).addEventListener('click', handler);
};


$(window).on('load',function(){
	  
	  onClick('.toggle',openToggle);
	  onClick('.features-link',openFeatures);
	  onClick('.company-link',openCompany);
	  
});