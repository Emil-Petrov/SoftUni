app.factory("utils", function(){
    function setSessionStorage(username, name, token) {
        var currentUser = {
            username: username,
            name: name,
            sessionToken: token
        };

        sessionStorage.currentUser = JSON.stringify(currentUser);
    }

    return{
        setStorage: setSessionStorage
    }
});