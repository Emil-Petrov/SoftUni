app.factory('videoFilter', function () {
    var categoryFilter = '';
    var dateFilter = '';
    var isSubbed = '';

    return {
        setCategory: function (category) {
            categoryFilter = category
        },
        setDate: function(date){
            dateFilter = date;
        },
        hasSubtitles: function(hasSubtitles){
            isSubbed = !!hasSubtitles;
        },
        getFilter: function(){
            var filter = {};
            if (categoryFilter != ''){
                filter['category'] = categoryFilter;
            }
            if (dateFilter != ''){
                filter['date'] = dateFilter;
            }
            if (isSubbed != ''){
                filter['haveSubtitles'] = '1';
            }
            return filter;
        }
    }
});