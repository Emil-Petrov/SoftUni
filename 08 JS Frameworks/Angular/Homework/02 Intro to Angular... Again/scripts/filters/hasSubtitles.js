app.filter('hasSubtitles', function(){
    return function(iReallyReallyREALLYhateyouJS, trueCase, falseCase){
        if (iReallyReallyREALLYhateyouJS == 1 || iReallyReallyREALLYhateyouJS == true){
            return trueCase;
        }
        return falseCase;
    }
});