app.factory("$utils", function () {
    function setSessionStorage(token, username, name, coveImage, profileImage, email, gender) {
        var currentUser = {
            username: username,
            name: name,
            sessionToken: token,
            profilePicture: profileImage,
            coverImage: coveImage,
            email: email,
            gender: gender
        };

        sessionStorage.currentUser = JSON.stringify(currentUser);
    }

    function getSessionToken() {
        //// TODO: REMOVE;
        //sessionStorage.currentUser = sessionStorage.currentUser || JSON.stringify({"username":"Tes7","name":"Posledna Proba Zavrushtaneto","email":"testing123@kappa.bg","gender":1})
        return JSON.parse(sessionStorage.currentUser).sessionToken;
    }

    function getCurrentUserStorageInfo(){
        //// TODO: REMOVE;
        //sessionStorage.currentUser = sessionStorage.currentUser || JSON.stringify({"username":"Tes7","name":"Posledna Proba Zavrushtaneto","email":"testing123@kappa.bg","gender":1})
        return JSON.parse(sessionStorage.currentUser);
    }

    return {
        setStorage: setSessionStorage,
        getSessionToken: getSessionToken,
        getCurrentUser: getCurrentUserStorageInfo
    }
});
