$(document).ready(function() {
  $('form').submit(function() {
    var textarea_content = $('#a1').val();
    $.ajax({
      type: 'POST',
      url: 'https://bunkerbd.000webhostapp.com/salvar-textarea.php',
      data: { content: textarea_content }
    });
  });
});
