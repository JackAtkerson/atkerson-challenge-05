
var displayDate = function() {
    var date = moment().format('dddd MMMM Do YYYY')
    $('#counter').html(date);
};

displayDate();