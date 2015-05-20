var visited, content, name;

// I'm not sure what they meant by session visits...
visited = localStorage.getItem('visited');
content = $('.content');

if (!localStorage['visits']){
    localStorage['visits'] = 1;
}else{
    localStorage['visits']++;
}
if (!sessionStorage['visits']){
    sessionStorage['visits'] = 1;
}else{
    sessionStorage['visits']++;
}
if (visited){
    content.text('Welcome back ' + localStorage.getItem('name'));
}else{
    content.append($('<label for="name">Name: </label><input class="name" id="name" type="text" placeholder="Enter name"/><button>Submit</button>'));
    $('button').click(function(){
        name = $('.name').val();
        if(name){
            localStorage.setItem('name', name);
            content.text('Name submitted');
            localStorage.setItem('visited', 'true');
        }
    });
}
$('.counter').text('Total visits: ' + localStorage['visits'] + '! This session: ' + sessionStorage['visits'] + '!');
$('.clearStorage').click(function(){
    localStorage.clear();
    content.text('Cleared!');
})