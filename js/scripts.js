// Business logic:
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function toMiles(km) {
  return km/1.6;
}
// User interface logic:
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    $("#output").text(add(number1, number2));
  })

  $("form#kmtomiles").submit(function(event) {
    event.preventDefault();
    const km = $("#km").val();
    $("#mi").text(toMiles(km));
  })
});
