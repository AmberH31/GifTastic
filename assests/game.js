var topics = ["dog", "cat", "tiger", "rabbit", "snake", "hourse", "sheep"];

function buttonCollect() {
  $("#buttonCollect").empty();

  for (i = 0; i < topics.length; i++) {
    // 建立原本的按鈕

    var button = $("<button>");
    a.addClass("animals");
    a.attr("data-name", topics[i]);
    a.html(topics[i]);
  }
  console.log(topics.length);
}

var queryURL =
  "https://api.giphy.com/v1/gifs/search" +
  //   randomWord +
  "&api_key=B1RJ1jEB8ZIJDLB6wH4JacJAc2QVYtjJ";
