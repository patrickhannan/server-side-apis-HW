$(document).ready(function () {

  var cityHistory = [];

  if (localStorage.getItem("city") !== null){
    showHistory();
  }

  $("#search-btn").on("click", function(){
        preventDefault();
        var city = $("#city-search").val();
        if (city !== "") {
            cityHistory.push(city);
            localStorage.setItem("city", JSON.stringify(cityHistory));
            showHistory();
            showWeather(city);
            $("#city-search").val("")
        }
  })

  function showHistory(){
        
  }





})