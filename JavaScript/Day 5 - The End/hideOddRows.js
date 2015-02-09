function hideOddRows() {

    for (var row in document.getElementsByTagName('tr')){
        if (row%2==0){
            var element = document.getElementsByTagName('tr')[row];
            element.style.display = 'none'
        }
    }

}

document.getElementById('btnHideOddRows').addEventListener('click', hideOddRows);