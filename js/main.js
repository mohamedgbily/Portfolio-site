const aboutOffSetTop = $('#about').offset().top
const navHeight = $('.f-nav').innerHeight()
$(window).scroll(function(){
    if ($(window).scrollTop() > aboutOffSetTop - navHeight) {
        $('.f-nav').css('backgroundColor' , '#3cd' )
            
        
        $('.backTop').fadeIn(1000).css('display' , 'flex')
        
        
    }
    else{
        $('.f-nav').css('backgroundColor' , 'transparent')
        $('.backTop').fadeOut()
    }
    
});

//-----------------[back to top]
$('.backTop').click(function(){
    $('html , body').animate( {scrollTop: 0} , 1000);
})

$('.f-nav ul a[href^="#"]').click( function(){
   const hrefOfClickedElement =  $(this).attr( 'href' );
   const sectionOfSet = $(hrefOfClickedElement).offset().top;
   $('html , body').animate( {scrollTop: sectionOfSet} , 1500);
} )

//-----------------------------[loading screen]---------------
$('document').ready( function() {
    $('.loadingScreen').fadeOut(1500 , function(){
        $('body').css('overflow' , 'auto')


 //----------------------------coloring Box-------------------
 $('.coloringBox .innerBox span').eq(0).css('backgroundColor' , 'rgb(255 ,0, 0)')
 $('.coloringBox .innerBox span').eq(1).css('backgroundColor' , 'rgb(0 ,255, 0)')
 $('.coloringBox .innerBox span').eq(2).css('backgroundColor' , ' rgb(255 ,255, 0)')
 $('.coloringBox .innerBox span').eq(3).css('backgroundColor' , 'rgb(0 ,0, 255)')
 $('.coloringBox .innerBox span').eq(4).css('backgroundColor' , 'rgb(255 ,0, 255)')
//-------------------------------------
$('.settingBox').click(function(){
  const widthOfInnerBox = $('.innerBox').outerWidth()
  if ($('.coloringBox').css('left') == '0px') {
    console.log($('.coloringBox').css('left'));
    $('.coloringBox').animate( { left: -widthOfInnerBox } , 1000)
  }
  else{
    console.log($('.coloringBox').css('left'));
    $('.coloringBox').animate( { left: 0 } , 1000)
  }

  })
  
  //----------------change color for all h2 and p when click in colorbox span color-------
  $('.coloringBox .innerBox span').click(function(){
    const color = $(this).css('backgroundColor');
    console.log(color);
    $('h2 , p , h3 , h5').css('color' , color)
    $('.gb-color').css('backgroundColor' , color)
})

    }); });
   