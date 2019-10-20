var topics = ["dog", "cat", "tiger", "rabbit", "snake", "hourse", "sheep"];
function displayInfo() {
  var animal = $(this).attr("data-name");

  var queryURL =
    "https://api.giphy.com/v1/gifs/search" +
    animal +
    "&api_key=B1RJ1jEB8ZIJDLB6wH4JacJAc2QVYtjJ";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    console.log(response);
    $("#gifDisplay").html(JSON.stringify(response));
  });
}

function renderButton() {
  $("#buttonCollect").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("new");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttonCollect").append(a);
  }
}

$("#buttonClick").on("click", function(event) {
  event.preventDefault();

  var animal = $("#buttonCreate")
    .val()
    .trim();
  topics.push(animal);
  console.log(topics);
  renderButton();
});

$(document).on("click", ".new", gifDisplay);
renderButton();
