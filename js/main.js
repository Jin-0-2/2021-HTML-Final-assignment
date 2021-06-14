$(function(){
    var slides=$('.left').find('img');
    var now=0,tot=1;
    sliding();
    function sliding(){
      slides.eq(1).fadeOut('slow');
      setInterval(function(){
        if(now==tot)now=0;else now++;
        slides.eq(now-1).fadeOut(2000);
        slides.eq(now).fadeIn(2000);
      },3000);
    }
});