//Uses moment to get date and display
var currentDay = moment().format('dddd MMMM DD YYYY');
$("#currentDay").text(currentDay);

//add classes to color with moment
function currentTime() {
    var theTime = moment().hours();
    $(".time-block").each(function(){
        var theHour = parseInt($(this).attr("id"));
        console.log(theHour);
        if (theHour > theTime) {
            $(this).addClass("future");
        } else if (theHour === theTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
currentTime();

var userSave;
if (JSON.parse(localStorage.getItem("userInput"))) {
    userSave = JSON.parse(localStorage.getItem("userInput"))
    console.log("userInput",Object.keys(userSave));
} else {
    userSave = {
        nine:"",
        ten:"",
    }
};

var field9 = document.querySelector("#nine");
field9.value = userSave.nine;



//event listener
$(".saveBtn").on("click", function(e) {
    userSave[e.target.value] = $("#" + e.target.value).val()
    console.log(userSave);
    localStorage.setItem("userInput", JSON.stringify(userSave));
});