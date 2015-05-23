app.factory("$utils", function () {
    function setSessionStorage(username, name, token, coverImage, profilePicture, email) {
        var currentUser = {
            username: username,
            name: name,
            sessionToken: token,
            profilePicture: profilePicture,
            coverImage: coverImage,
            email: email
        };

        sessionStorage.currentUser = JSON.stringify(currentUser);
    }

    function getSessionToken() {
        // TODO: REMOVE;
        sessionStorage.currentUser = sessionStorage.currentUser || JSON.stringify({"username":"Tes7","name":"Tes7","sessionToken":"Bearer Nb1hShsKUyD6-Mpl-4P-r3sgHSU476EbwArLppFyFK37SbCADmiJS5gL6c3Oyddvc9YogTHzYqJCPeMeXton2xeSPTCenta0VeKWQxk-Dt9YmiPEsEi6vhHLg1aZz5KRqxXNXOKTBT46N7haHWh5SnGIbrSvl1I4alAbhRdVlJ4rOGpOh5LxV6dJHlpt6RgjaL65t8dX33uHUp2EoKQbF8DbsGSYJtoisJyn723vH9khu0T3aMewbz7o_itCsLTMyRelk8r0SDOfg1lfWsfI7WOKSCV8TFkcPcwX9wOSb7I5-tU4a-KGccL6B8WEV_qPgCqKOvJvi-6BRo9ABMcl8gDw_rU5YMLn1HeJWhq-JvycPCHAO7bcK7x0QFu3tOc0qDKFyrp6cVUpKPd6dKU1bWKOF_3J4w5y-Zz7ZoacVRVwg3JE0Ab3HBg7x5m59Gu5Tnh2rMp-FrvNld7i6TyjkXPeKEp4UcK5wmrHdNbrVmRg4DCpy2oEjtLajKnr-jLX"})
        return JSON.parse(sessionStorage.currentUser).sessionToken;
    }

    function getCurrentUserStorageInfo(){
        // TODO: REMOVE;
        sessionStorage.currentUser = sessionStorage.currentUser || JSON.stringify({"username":"Tes7","name":"Tes7","sessionToken":"Bearer Nb1hShsKUyD6-Mpl-4P-r3sgHSU476EbwArLppFyFK37SbCADmiJS5gL6c3Oyddvc9YogTHzYqJCPeMeXton2xeSPTCenta0VeKWQxk-Dt9YmiPEsEi6vhHLg1aZz5KRqxXNXOKTBT46N7haHWh5SnGIbrSvl1I4alAbhRdVlJ4rOGpOh5LxV6dJHlpt6RgjaL65t8dX33uHUp2EoKQbF8DbsGSYJtoisJyn723vH9khu0T3aMewbz7o_itCsLTMyRelk8r0SDOfg1lfWsfI7WOKSCV8TFkcPcwX9wOSb7I5-tU4a-KGccL6B8WEV_qPgCqKOvJvi-6BRo9ABMcl8gDw_rU5YMLn1HeJWhq-JvycPCHAO7bcK7x0QFu3tOc0qDKFyrp6cVUpKPd6dKU1bWKOF_3J4w5y-Zz7ZoacVRVwg3JE0Ab3HBg7x5m59Gu5Tnh2rMp-FrvNld7i6TyjkXPeKEp4UcK5wmrHdNbrVmRg4DCpy2oEjtLajKnr-jLX"})
        return JSON.parse(sessionStorage.currentUser);
    }

    return {
        setStorage: setSessionStorage,
        getSessionToken: getSessionToken,
        getCurrentUser: getCurrentUserStorageInfo
    }
});

function a(){
    return JSON.parse(sessionStorage.currentUser || "") || 2;
}
// Dude with friends
// Bearer Nb1hShsKUyD6-Mpl-4P-r3sgHSU476EbwArLppFyFK37SbCADmiJS5gL6c3Oyddvc9YogTHzYqJCPeMeXton2xeSPTCenta0VeKWQxk-Dt9YmiPEsEi6vhHLg1aZz5KRqxXNXOKTBT46N7haHWh5SnGIbrSvl1I4alAbhRdVlJ4rOGpOh5LxV6dJHlpt6RgjaL65t8dX33uHUp2EoKQbF8DbsGSYJtoisJyn723vH9khu0T3aMewbz7o_itCsLTMyRelk8r0SDOfg1lfWsfI7WOKSCV8TFkcPcwX9wOSb7I5-tU4a-KGccL6B8WEV_qPgCqKOvJvi-6BRo9ABMcl8gDw_rU5YMLn1HeJWhq-JvycPCHAO7bcK7x0QFu3tOc0qDKFyrp6cVUpKPd6dKU1bWKOF_3J4w5y-Zz7ZoacVRVwg3JE0Ab3HBg7x5m59Gu5Tnh2rMp-FrvNld7i6TyjkXPeKEp4UcK5wmrHdNbrVmRg4DCpy2oEjtLajKnr-jLX