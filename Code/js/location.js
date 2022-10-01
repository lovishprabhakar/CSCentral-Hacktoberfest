var x = document.getElementById("demo");
var resultdata = document.querySelector("#result-data");
var table1 = document.querySelector("#result-data-1");
var backBtn = document.querySelector("#btnBack");
var card1ul = document.querySelector(
    "#result-data > div:nth-child(1) > div > div.card-body.text-dark > ul"
);
var locateMeBtn = document.querySelector("#locateMeBtn");
var locationBtns = document.querySelector(".mainBtnDiv");
var openWeatherImg = "https://openweathermap.org/img/wn/";
var mainContent = document.querySelector(".content");
var body = document.querySelector("body");

defaultFunction();

function defaultFunction() {}

function getLocation() {
    // locateMeBtn.textContent = "Fetching your location...";
    if (navigator.geolocation) {
        // locateMeBtn.style.display = "none";
        // backbuttonCreated();
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function backbuttonCreated() {
    var backBtn = document.createElement("button");
    backBtn.innerHTML = "Back";
    backBtn.setAttribute(
        "class",
        "w-25 form-control form-control-md bg-secondary"
    );
    locationBtns.appendChild(backBtn);
    backBtn.setAttribute("style", "display:block");
    // backBtn.setAttribute("onclick", "backtoHome()");
    backBtn.setAttribute("id", "btnBack");
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const kelvin = 273;

    // API ID
    const api = "c5b336f5f035f5b836c136b2d6d36475";

    // API URL
    const base =
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
        `lon=${lon}&appid=` +
        api;

    var w = window.body.clientWidth;
    var h = window.body.clientHeight;

    // Calling the API
    fetch(base)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var randomImgUrl =
                "url('https://source.unsplash.com/random/" +
                w +
                "X" +
                h +
                "/?" +
                data.weather[0].main +
                "')";
            // body.setAttribute(
            //     "style",
            //     "background-image:" +
            //     randomImgUrl +
            //     ";background-repeat: no-repeat;background-size: " +
            //     w +
            //     "px " +
            //     h +
            //     "px;"
            // );
            resultdata.style.display = "flex";
            var resuldata = data;
            card1Binding(resuldata, kelvin);
        });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

function card1Binding(data, kelvin) {
    var temp = temp_Celcius_Calc(data.main.temp, kelvin);
    var maxTemp = temp_Celcius_Calc(data.main.temp_max, kelvin);
    var minTemp = temp_Celcius_Calc(data.main.temp_min, kelvin);

    var sunrise = unixToDate_Calc(data.sys.sunrise);
    var sunset = unixToDate_Calc(data.sys.sunset);

    var wind = mph_Calc(data.wind.speed);

    var humidity = data.main.humidity;

    var visibility = m_km_Calc(data.visibility);

    var pressure = data.main.pressure;

    var summary = data.weather;

    var convertedJson = {
        temp: temp,
        maxTemp: maxTemp,
        minTemp: minTemp,
        sunrise: sunrise,
        sunset: sunset,
        wind: wind,
        humidity: humidity,
        visibility: visibility,
        pressure: pressure,
        summary: summary,
        feelslike: temp_Celcius_Calc(data.main.feels_like, kelvin),
        cloudiness: data.clouds.all,
        locationName: data.name,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
    };

    bindingTableRow1(convertedJson);
    bindingTableRow2(convertedJson);
    bindingTableRow3(convertedJson);
    console.log(convertedJson);

    var card1List = [
        "Temp: " + temp,
        "Max Temp: " + maxTemp,
        "Min temp: " + minTemp,
        "SunRise: " + sunrise,
        "Wind: " + wind + " mph <i class='bi bi-arrow-down-left'></i>",
        "humidity: " + humidity + "%",
        "visibility: " + visibility,
        "pressure: " + pressure + "mb",
    ];

    for (i = 0; i <= card1List.length - 1; i++) {
        var li = document.createElement("li"); // create li element.
        li.innerHTML = card1List[i]; // assigning text to li using array value.
        li.setAttribute("style", "display: block;"); // remove the bullets.
    }
}

function bindingHeader(locationName) {
    var heading = document.querySelector("body > main > h1");
    heading.setAttribute("class", "h3 mb-3 my-4 fw-normal text-center ");

    heading.innerHTML =
        "Meteorological Condition for the location " + locationName;
}
//binding the resultant in table1
function bindingTableRow1(convertedJson) {
    var tr = document.createElement("tr");
    tr.setAttribute("style", "height:130px");
    tr.setAttribute("class", "text-dark");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td1.innerHTML =
        "<i class='bi bi-wind fs-1 text-primary'></i><b> Wind:</b> " +
        convertedJson.wind +
        " mph" +
        "<i class='bi bi-arrow-down-left'></i>";
    td2.innerHTML =
        "<i class='bi bi-droplet-half fs-1 text-primary'></i> <b>Humidity</b>: " +
        convertedJson.humidity +
        "%";
    td3.innerHTML =
        "<i class='bi bi-bullseye fs-1 text-primary'></i> <b>Visibility</b>: " +
        convertedJson.visibility;
    td4.innerHTML =
        "<i class='bi bi-alarm fs-1 text-primary'></i> <b>Pressure: </b>" +
        convertedJson.pressure +
        " mb";
    td5.innerHTML =
        "<i class='bi bi-clouds-fill fs-1 text-primary'></i> <b>Cloudiness</b>: " +
        convertedJson.cloudiness +
        "%";

    table1.style = "text-align:center";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table1.appendChild(tr);
}

function bindingTableRow2(convertedJson) {
    var tr = document.createElement("tr");
    tr.setAttribute("style", "height:150px");
    tr.setAttribute("class", "text-dark");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.innerHTML =
        "<i class='bi bi-globe fs-1 text-primary'></i> <br><b>Latitude</b><br> " +
        convertedJson.latitude;
    td2.innerHTML =
        "<i class='bi bi-globe2 fs-1 text-primary'></i> <br><b>Longitude</b><br> " +
        convertedJson.longitude;
    td3.innerHTML =
        "<i class='bi bi-sunrise-fill fs-1 text-primary'></i> <br><b>Sunrise</b><br> " +
        convertedJson.sunrise;
    td4.innerHTML =
        "<i class='bi bi-sunset-fill fs-1 text-primary'></i> <br><b>Sunset</b><br> " +
        convertedJson.sunset;

    table1.style = "text-align:right";

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table1.appendChild(tr);
}

function bindingTableRow3(convertedJson) {
    var tr = document.createElement("tr");
    tr.setAttribute("style", "height:150px");
    tr.setAttribute("class", "text-dark");

    var td1 = document.createElement("td");
    td1.setAttribute("class", "colspan='4'");
    td1.setAttribute("style", "float:right");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "row");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "col-6");

    var img = document.createElement("img");
    img.setAttribute(
        "src",
        openWeatherImg + convertedJson.summary[0].icon + ".png"
    );
    img.setAttribute("style", "height:110px;width:105px");
    img.setAttribute("class", "text-center");

    var td2 = document.createElement("td");
    td2.setAttribute("style", "font-size: 1.9rem;");

    var td4 = document.createElement("td");
    td4.setAttribute("style", "text-transform: capitalize;");

    var arrObject = new Array();
    for (var i = 0; i <= convertedJson.summary.length - 1; i++) {
        arrObject[i] = convertedJson.summary[i];
    }

    for (var i = 0; i <= arrObject.length - 1; i++) {
        td2.innerHTML += arrObject[i].main + " / ";
        td4.innerHTML += arrObject[i].description + " , ";
    }
    if (
        td2.innerHTML[td2.innerHTML.length - 1] == " " &&
        td2.innerHTML[td2.innerHTML.length - 2] == "/"
    ) {
        td2.innerHTML = td2.innerHTML.slice(0, -2);
    }
    if (
        td4.innerHTML[td4.innerHTML.length - 1] == " " &&
        td4.innerHTML[td4.innerHTML.length - 2] == ","
    ) {
        td4.innerHTML = td4.innerHTML.slice(0, -2);
    }

    var td3 = document.createElement("td");
    td3.setAttribute("style", "float: center;");
    td3.innerHTML =
        "<b>Feels Like:</b> " +
        convertedJson.feelslike +
        " <br><b>Low:</b> " +
        convertedJson.minTemp +
        " <br><b>High:</b> " +
        convertedJson.maxTemp;

    td1.appendChild(div1);
    div1.appendChild(div2);
    div2.appendChild(img);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table1.appendChild(tr);
}

//temperature to degree celcius
function temp_Celcius_Calc(input, kelvin) {
    return Math.floor(input - kelvin) + "°C";
}

//Sunrise or sunset time, unix, UTC
function unixToDate_Calc(sunrise) {
    var res = new Date(sunrise * 1000);
    return res.toLocaleString();
}

//meter per sec to miles per hour
function mph_Calc(wind) {
    return Math.round(((wind * 3600) / 1610.3) * 1000) / 1000;
}

//meter to km
function m_km_Calc(meter) {
    //return meter * (0.000621371192).toFixed(1);
    var km = meter / 1000;
    return km.toFixed(1) + " km";
}