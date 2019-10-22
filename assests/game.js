var topics = ["dog", "cat", "tiger", "rabbit", "snake", "horse", "sheep"];
$(document).on("click", "button", function() {
  var animalBtn = $("#gifDisplay").attr("data-name");

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    animalBtn +
    "&api_key=B1RJ1jEB8ZIJDLB6wH4JacJAc2QVYtjJ";

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // console.log(response);
    //   $("#gifDisplay").html(JSON.stringify(response));
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");
      //   var rating = results[i].rating;
      //   var p = $("<p>").text("Rating: " + rating);
      var animalImage = $("<img>");
      animalImage.attr("src", results[i].images.fixed_height_still.url);
      //   gifDiv.prepend(p);
      gifDiv.prepend(animalImage);
      $("#gifDisplay").prepend(gifDiv);
    }
    // console.log("data here" + results);
  });
});

function renderButton() {
  $("#buttonCollect").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.addClass("new");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttonCollect").append(a);
  }
  $("#buttonClick").on("click", function(displayInfo) {
    $("#buttonCollect").append("");
  });
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
