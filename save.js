function saveTextareaValues() {
  var values = {};
  var textareas = document.getElementsByTagName("textarea");
  for (var i = 0; i < textareas.length; i++) {
    var id = textareas[i].id;
    var value = textareas[i].value;
    values[id] = value;
  }
  localStorage.setItem("textareaValues", JSON.stringify(values));
}

function loadTextareaValues() {
  var values = JSON.parse(localStorage.getItem("textareaValues"));
  if (values) {
    var textareas = document.getElementsByTagName("textarea");
    for (var i = 0; i < textareas.length; i++) {
      var id = textareas[i].id;
      var value = values[id];
      if (value) {
        textareas[i].value = value;
      }
    }
  }
}

var textareas = document.querySelectorAll('textarea[id^="a"], textarea[id^="b"], textarea[id^="c"]');
for (var i = 0; i < textareas.length; i++) {
  textareas[i].addEventListener("blur", saveTextareaValues);
}

loadTextareaValues();
