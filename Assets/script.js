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
        eleven:"",
        twelve:"",
        thirteen:"",
        fourteen:"",
        fifteen:"",
        sixteen:"",
        seventeen:"",
    }
};

var field9 = document.querySelector("#nine");
field9.value = userSave.nine;
var field10 = document.querySelector("#ten");
field10.value = userSave.ten;
var field11 = document.querySelector("#eleven");
field11.value = userSave.eleven;
var field12 = document.querySelector("#twelve");
field12.value = userSave.twelve;
var field13 = document.querySelector("#thirteen");
field13.value = userSave.thirteen;
var field14 = document.querySelector("#fourteen");
field14.value = userSave.fourteen;
var field15 = document.querySelector("#fifteen");
field15.value = userSave.fifteen;
var field16 = document.querySelector("#sixteen");
field16.value = userSave.sixteen;
var field17 = document.querySelector("#seventeen");
field17.value = userSave.seventeen;



//event listener
$(".saveBtn").on("click", function(e) {
    userSave[e.target.value] = $("#" + e.target.value).val()
    console.log(userSave);
    localStorage.setItem("userInput", JSON.stringify(userSave));
});