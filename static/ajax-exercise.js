"use strict";


function replaceFortune(result) {
    $("#fortune-text").html(result);
}

function showFortune(evt) {

    $.get('/fortune', replaceFortune);
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER
function replaceWeathers(results) {
   $("#weather-info").html(results.forecast); 
}
function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url,formData, replaceWeathers);
    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    let url = "/order-melons.json";
    // let formInputs = {
    //     'qty': $('#qty-field').val(),
    //     'melon': $('#melon-type-field').val(),
    // };

    let formValues = $('#order-form').serialize();

    // TODO: show the result message after your form
    $.post(url, formValues, (res) => {
        if (res.code === 'ERROR') {
            $('#order-status').addClass("order-error");
            // $('#order-status').text(res.code);
        };

        $('#order-status').text(res.msg);
        console.log(res);
    });
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


