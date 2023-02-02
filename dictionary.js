var xhr = new XMLHttpRequest();
xhr.open("GET", "words.txt", true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var words = xhr.responseText.split("\n");
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].split(" - ");
      words[i].push({
        genus: "",
        type: "",
        declination: "",
        conjugation: ""
      });
    }
    function searchWords() {
      var input = document.getElementById("searchInput").value;
      var matches = [];
      for (var i = 0; i < words.length; i++) {
        if (words[i][0].includes(input) || words[i][1].includes(input)) {
          matches.push(words[i]);
        }
      }
      var html = "";
      for (var i = 0; i < matches.length; i++) {
        html += "<a href='#' onclick='displayWord(" + i + ")'>" + matches[i][0] + " - " + matches[i][1] + "</a><br>";
      }
      document.getElementById("results").innerHTML = html;
    }
    function displayWord(index) {
      var html = "";
      html += "<h2>" + words[index][0] + " - " + words[index][1] + "</h2>";
      html += "<p><strong>Genus:</strong> " + words[index][2].genus + "</p>";
      html += "<p><strong>Type of word:</strong> " + words[index][2].type + "</p>";
      html += "<p><strong>Declination:</strong> " + words[index][2].declination + "</p>";
      html += "<p><strong>Conjugation:</strong> " + words[index][2].conjugation + "</p>";
      document.getElementById("wordDetails").innerHTML = html;
    }
    document.getElementById("searchInput").addEventListener("keyup", searchWords);
  }
};
xhr.send();
