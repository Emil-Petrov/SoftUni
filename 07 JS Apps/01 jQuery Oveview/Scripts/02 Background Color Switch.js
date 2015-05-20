var targetSelector, target, color;

function Paint(element, color){
    element.css('background', color);
}

$('#paint').click(function(){
    targetSelector = '.' + $('#class').val();
    target = $(targetSelector);
    color = $('#color').val();
    Paint(target, color);
});