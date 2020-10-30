//This saves "right now" in a variable, from which we can obtain useful information
var now = moment().subtract(11, 'hours');

//Today's date || Top of the page
$('#currentDay').text(now.format('dddd, MMMM Do YYYY, kk:mm a'));

//Changing the color of the text area depending on the current time.
$('.text').each(function(index){
    var hourData = $(this).attr('data-time')
    var hour = moment().startOf('day').add(hourData, 'h');
    var timeDifference = hour.diff(now, 'hours', true);
    if(timeDifference < 0 && timeDifference > -1){
        $(this).addClass('present');
    } else if(timeDifference > 0){
        $(this).addClass('future');
    }else if(timeDifference < -1){
        $(this).addClass('past');
    }
    console.log(index + ": " + timeDifference);
})


