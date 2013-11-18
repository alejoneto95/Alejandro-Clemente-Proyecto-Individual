// JavaScript Document

function cargar(){
        jQuery(document).ready(function($) {
          
          $('#banner-slide').bjqs({
            animtype      : 'slide',
            height        : 320,
            width         : 620,
            responsive    : true,
            randomstart   : true
          });
          
        });
 
 //efecto dropdown fade
            $('.ejemplo-5 ul li').has('ul').hover(function(e){
                $(this).addClass('current');
                $('ul', this).stop(true, true).fadeIn(200);
            }, function(e){
                $(this).removeClass('current');
                $('ul', this).stop(true, true).fadeOut(200);
            });
			
			
 }
 
 
            
	
			