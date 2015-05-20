var contents, header, body;

function createTable(json){

    contents = JSON.parse(json);
    function createHeader(obj){
        header = '\n<thead>\n<tr>';
        $.each(obj, function(key){
            header+= '\n<th class="' + key + '">' + key + '</th>';
        });
        header += '\n</tr>\n</thead>';
        return header;
    }

    // I could have actually 1 upped the script and made it so when the object type changes it will create a new table but meh...
    function createBody(obj){
        body = '\n<tbody>';
        $.each(obj, function(key, value){
            body += '\n<tr>';
            $.each(value, function(key, value){
                body += '\n<td class="' + key + '">' + value + '</td>';
            });
            body += '</tr>';
        });
        body += '\n</tbody>';
        return body;
    }

    return '<table>' + createHeader(contents[0]) + createBody(contents) + '\n</table>';
}