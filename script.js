$(document).ready(function () {

//Variables
  var cityHistory = [];
  var city = $("#city-search").val()
  var historyList = $("#history-list")

  if (localStorage.getItem("city") !== null){
    showHistory();
  }
//Search Button Event Listener
  $("#search-btn").on("click", function (event) {
        event.preventDefault();
        if (city !== "") {
            cityHistory.push(city);
            localStorage.setItem("city", JSON.stringify(cityHistory));
            showHistory();
            $("#city-search").val("")
        }
  })
//Generates History List on the left side of the page
  function showHistory(){
        cityHistory = JSON.parse(localStorage.getItem("city"));
        historyList.empty();
        for (var i = 0; i < cityHistory.length; i++) {
            var listItem = $("<li>").text(cityHistory[i])
            listItem.addClass("list-group-item")
            historyList.append(listItem);
    }
  }





})