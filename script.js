//This saves "right now" in a variable, from which we can obtain useful information
var now = moment();

//Today's date || Top of the page
$('#currentDay').text(now.format('dddd, MMMM Do YYYY, kk:mm a'));

//Changing the color of the text area depending on the current time.
$('.text').each(function (index) {
    var hourData = $(this).attr('data-time')
    var hour = moment().startOf('day').add(hourData, 'h');
    var timeDifference = hour.diff(now, 'hours', true);
    if (timeDifference < 0 && timeDifference > -1) {
        $(this).addClass('present');
    } else if (timeDifference > 0) {
        $(this).addClass('future');
    } else if (timeDifference < -1) {
        $(this).addClass('past');
    }
    //This line is for development purpose only
    console.log(index + ": " + timeDifference);
});

/*This function creates an object with the information that
is going to be passed to the array in local storage*/
function makeEntry(u_text, u_hour) {
    return {
        text: u_text,
        hour: u_hour,
        date: moment(now)
    }
}

//Saving to Local Storage buttons
$('.fa-save').on('click', function () {
    var buttonClikedTimeInfo = $(this).attr('data-time');
    var correspondingTextarea = $(`textarea[data-time=${buttonClikedTimeInfo}]`)
    var savedText = correspondingTextarea.val();
    var newEntry = makeEntry(savedText, buttonClikedTimeInfo);
    if (localStorage.getItem('day_plans')) {
        var updatedDayPlans = JSON.parse(localStorage.getItem('day_plans'));
        updatedDayPlans.push(newEntry);
        localStorage.setItem('day_plans', JSON.stringify(updatedDayPlans));
    } else {
        var dayPlans = [];
        dayPlans.push(newEntry);
        localStorage.setItem('day_plans', JSON.stringify(dayPlans));
    }
    //This line is for development purpose only
    console.log(now);
});

function displayDayPlans() {
    if (localStorage.getItem('day_plans')) {
        var currentPlansArray = JSON.parse(localStorage.getItem('day_plans'));
        //This block of code is for develepment purpose only
        currentPlansArray.forEach(timeBlock =>{
            console.log(moment(timeBlock.date).format('MM-DD-YYYY'));
        });
        //-------------------------------------------------------
        var updatedPlansArray = currentPlansArray.filter(timeBlock =>{
            return moment(timeBlock.date).format('MM-DD-YYYY') === now.format('MM-DD-YYYY');
        });
        console.log(updatedPlansArray);
        updatedPlansArray.forEach(function (timeBlock) {
            $(`textarea[data-time=${timeBlock.hour}]`).val(timeBlock.text);
        });
        localStorage.setItem('day_plans', JSON.stringify(updatedPlansArray));
    }
};

displayDayPlans();


