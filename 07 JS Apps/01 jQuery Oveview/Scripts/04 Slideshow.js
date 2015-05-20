$('.slide').hide();
function goToNextSlide(){
    var currentActive = $('.slide-active');
    var nextActive = currentActive.next();
    if(!nextActive[0]){
        nextActive = $('.slides').children().first();
    }
    currentActive.removeClass('slide-active').addClass('slide').fadeOut(1000);
    nextActive.removeClass('slide').addClass('slide-active').fadeIn(1000);
}
function goToPreviousSlide(){
    var currentActive = $('.slide-active');
    var nextActive = currentActive.prev();
    if(!nextActive[0]){
        nextActive = $('.slides').children().last();
    }
    currentActive.removeClass('slide-active').addClass('slide').fadeOut(1000);
    nextActive.removeClass('slide').addClass('slide-active').fadeIn(1000);
}
$('.right').click(goToNextSlide);
$('.left').click(goToPreviousSlide)
setInterval(goToNextSlide,5000);
