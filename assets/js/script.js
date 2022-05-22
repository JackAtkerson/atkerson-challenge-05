var textHourEl = 9;
var textSuffixEl = ":00am";

var displayDate = function() {
    var date = moment().format('dddd, MMMM Do, YYYY')
    $('#counter').html(date);
};

var setColor = function() {
    
};
displayDate();