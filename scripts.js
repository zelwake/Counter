let clicks = 0
clicks = parseInt( $("h2").text());
console.log(clicks)

$("button").click(() => {
    clicks = clicks + 1;
    $("h2").text(clicks);
})