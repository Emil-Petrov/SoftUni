function sendRequest(method, url, data, success, error) {
    $.ajax({
        async: false,
        type: method,
        url: url,
        headers: {
            'X-Parse-Application-Id': 'yNbuEO0O4tkwFiK5KHeWladeHtOrgWPEvELS0MHN',
            'X-Parse-REST-API-Key': 'rzVEEBWzYLGGswIIj48xTKyw9i0wgOxvxSKTJP5N'
        },
        data: JSON.stringify(data),
        success: success,
        error: error
    });
    return this;
}

var CountryApp = (function () {

    var countryUrl = 'https://api.parse.com/1/classes/Country';
    var townUrl = 'https://api.parse.com/1/classes/Town';

    function sendRequest(method, url, data, success, error) {
        $.ajax({
            async: false,
            type: method,
            url: url,
            headers: {
                'X-Parse-Application-Id': 'yNbuEO0O4tkwFiK5KHeWladeHtOrgWPEvELS0MHN',
                'X-Parse-REST-API-Key': 'rzVEEBWzYLGGswIIj48xTKyw9i0wgOxvxSKTJP5N'
            },
            data: JSON.stringify(data),
            success: success,
            error: error
        });
        return this;
    }

    function displayCountries(target) {
        sendRequest('get', countryUrl, null, function (data) {
            $.each(data.results, function (index, country) {
                $(target).append('<div class="country" id="' + country.objectId + '">' + escapeHTML(country.name) + '</div>');
            })
        }, logError);
        return this;
    }

    function logError(err) {
        console.log(err.statusText);
    }


    function addCountry(name, target) {
        sendRequest('post', countryUrl,
            {
                name: name
            },
            function (data) {
                console.log(data);
                $(target).append($('<div class="country" id="'+ data.objectId +'">' + escapeHTML(name) + '</div>').fadeIn(1000).css('display', 'block'))
            }, logError);
        return this;
    }

    function changeCountry(id, name) {
        sendRequest('put', countryUrl + "/" + id,
            {
                name: escapeHTML(name)
            },
            function (data) {
                $('#' + id).text(name);
                console.log(data)
            }, logError);
        return this;
    }

    function deleteCountry(id) {
        sendRequest('delete', countryUrl + '/' + id, null, function () {
            $('#' + id).fadeOut(1000, function () {
                $(this).remove()
            });
            console.log('Country with id: ' + id + ' removed from db.');
        }, logError)
    }

    function displayTowns(id, target) {
        var filter = '?where={"country":{"__type":"Pointer", "className":"Country","objectId":"' + id + '"}}';
        var url = townUrl + filter;
        sendRequest('get', url, null, function (data) {
            $.each(data.results, function (index, town) {
                $(target).append($('<div class="town" id="' + town.objectId + '">' + escapeHTML(town.name) + '</div>'));
            });
        }, logError);
        return this;
    }

    function addTown(name, countryId) {
        sendRequest('post', townUrl,
            {
                name: name,
                country: {
                    __type: "Pointer",
                    className: "Country",
                    objectId: countryId
                }
            }, function (data) {
                console.log(data)
            }, logError);
        return this;
    }

    function changeTown(id, name, countryId) {
        var town = {};
        if (name) {
            town['name'] = name;
        }
        if (countryId) {
            town['country'] = {
                __type: "Pointer",
                className: "Country",
                objectId: countryId
            }
        }

        sendRequest('put', townUrl + "/" + id, town, function (data) {
            console.log(data);
        }, logError);
        return this;
    }

    function deleteTown(id) {
        sendRequest('delete', townUrl + "/" + id, null, function () {
            $('#'+id).remove();
            console.log('Town with id: ' + id + " has been removed from the db")
        });
        return this;
    }


    function escapeHTML(text) {
        if (text){
            return text.replace(/&/g, '&amp;')
                .replace(/"/g, '&quot;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
        }
        return text;
    }


    function restoreDB(countryDOM, townDOM) {
        $('.country').remove();
        sendRequest('get', countryUrl, null, function (data) {
            $.each(data.results, function (index, country) {
                deleteCountry(country.objectId)
            })
        });
        sendRequest('get', townUrl, null, function(data){
            $.each(data.results, function(index, town){
                deleteTown(town.objectId)
            })
        });
        addCountry('Bulgaria', countryDOM);
        addCountry('Lala land', countryDOM);
        addCountry('Test land', countryDOM);
        addCountry('Some other land', countryDOM)
        addTown('Sofia', ($('.country').first().attr('id')));
        addTown('Lala Town', ($('.country').first().next().attr('id')));
        addTown('Test Town', ($('.country').first().next().next().attr('id')));
        addTown('Some other Town', ($('.country').first().next().next().attr('id')));
        displayTowns($('.country').first().attr('id'), townDOM)
    }


    return {
        displayCountries: displayCountries,
        addCountry: addCountry,
        changeCountry: changeCountry,
        deleteCountry: deleteCountry,
        resetDB: restoreDB,
        displayTowns: displayTowns,
        addTown: addTown,
        changeTown: changeTown,
        deleteTown: deleteTown
    }
})();


