function reverseStr(str){
    var words = str.split(/\s+/g);
    for (var word in words){
        words[word] = words[word].split('').reverse().join('');
    }
    console.log(words.join(' '));
}