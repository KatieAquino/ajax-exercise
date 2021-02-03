"use strict";

//Show random fortune
function showFortune(evt) {

    $.get('/fortune', (result) => {
        $("#fortune-text").html(result);
    });
}
$('#get-fortune-button').on('click', showFortune);


// SHOW WEATHER Forcast
function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, (res) => {
        $('#weather-info').text(res.forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// Show result message after submitting order form
// If result is error, show in red

function orderMelons(evt) {
    evt.preventDefault();

    let url = "/order-melons.json";
    let formValues = $('#order-form').serialize();

    $.post(url, formValues, (res) => {
        if (res.code === 'ERROR') {
            $('#order-status').addClass("order-error");
            $('#order-status').prepend(res.code);
            console.log(res.code)
        };
        $('#order-status').text(res.msg);
        console.log(res);
    });
}

$("#order-form").on('submit', orderMelons);


