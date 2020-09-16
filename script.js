$(document).ready(function () {

  var cityHistory = [];

  if (localStorage.getItem("city") !== null){
    showHistory();
  }

  $("#search-btn").on("click", function (event) {
        event.preventDefault();
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
        cityHistory = JSON.parse(localStorage.getItem("city"));
        var historyList = $("#history-list");
        historyList.empty();
        for (var i = 0; i < cityHistory.length; i++) {
            var listItem = $("<li>").text(cityHistory[i])
            listItem.addClass("list-group-item")
            historyList.append(listItem);
    }
  }

  function showWeather(city){
    var queryURLWeather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8f7feb434e1136cc2c1ab8d74b64a2f6";
    var latitude = []
    var longitude = []

    $("#filler").attr("class", "hide")

    $.ajax({
        url: queryURLWeather,
        method: "GET",
    }).then(function (response) {
        $("#heading").text(response.name + " (" + moment().format("M/D/YYYY") + ")")
        $("#icon").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
        $("#temperature").text("Temperature: " + response.main.temp + " °F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#wind-speed").text("Wind Speed: " + response.wind.speed + " MPH");
        latitude.push(response.coord.lat)
        longitude.push(response.coord.lon);
        uvIndex(latitude, longitude);
    })
  }
  

})