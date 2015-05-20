function findPal(str){
    var words = str.toLowerCase().split(/\W+/g);
    var output = [];
    for (var word in words){
        if (words[word]==words[word].split('').reverse().join('') && words[word]!=''){
            output.push(words[word]);
        }
    }
    return output.join(', ');
}
findPal('There is a man, his name was Bob.');