function addBefore(){
    $('#dummy').before($('<div></div>').text($('#element').val()));
}
function addAfter(){
    $('#dummy').after($('<div></div>').text($('#element').val()));
}
$('#addAfter').click(addAfter);
$('#addBefore').click(addBefore);