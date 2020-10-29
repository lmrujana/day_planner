//This saves "right now" in a variable, from which we can obtain useful information
var now = moment();

//Today's date || Top of the page
$('#currentDay').text(now.format('dddd, MMMM Do YYYY, kk:mm'));

