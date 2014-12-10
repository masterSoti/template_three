alert('Please be aware that the website you are entering is not yet finished');
$(document).ready(function(){
  $('.nav td').click(function(){
    location.reload();
    alert("Sorry, but this page has not been finished yet");
  });
});
