clicks = parseInt($("h2").text());

$("#buttonUp").click(() => {
    clicks++;
    $("h2").text(clicks);
})

$("#buttonDown").click(() => {
    clicks--;
    $("h2").text(clicks);
})