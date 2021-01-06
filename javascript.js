// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

// Save Button listner

$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    
 //saves to local storage   
    localStorage.setItem(time, text);

});

//Loads saved data for each time slot from local storage
$("#clock7 .description").val(localStorage.getItem("clock7"));



// This is how it determines the time block for present, past and future
$.each(timeHour, function (i, hour) {
    var hourID = parseInt($(this).attr("id"));
    if (hourID === now) {
        $(this).next().addClass("present");
    } else if (hourID < now) {
        $(this).next().addClass("past");
    } else if (hourID > now) {
        $(this).next().addClass("future");
    }
});


//Current moment of the day to determine if time block is present, past or future.

var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));
