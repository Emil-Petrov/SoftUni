function compareChars(arr1,  arr2){

    var fArr = arr1.join('');
    var sArr = arr2.join('');
    if(fArr==sArr){
        return 'Matching';
    }
    return 'Not matching';
}
compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
//compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);

