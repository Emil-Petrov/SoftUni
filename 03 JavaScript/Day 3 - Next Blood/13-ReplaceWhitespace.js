function replaceWhite(str){
    return str.split(/\s+/g).join('&nbsp');
}
replaceWhite("But you were living in another world tryin' to get your message through");
