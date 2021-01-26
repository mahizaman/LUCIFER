if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/Worker.js')
    .then(reg => console.log('Install our WebApp from Chrome on any device!'))
    .catch(err => console.log(' Proper App version not found for your device to install or this device is not Compatible', err));
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //  Bind the event handler to the "submit" JavaScript event
$('form').submit(function () {

  // Get the Login Name value and trim it
  var name = $.trim($('#name').val());
  var email = $.trim($('#email').val());
  var message =$.trim($('#message').val());

  // Check if empty of not
  if (name === '') {
      alert('Your name is empty.');
      return false;
  }
  else if (email === '') {
      alert('Your email is empty.');
      return false;
  }
  else if (message === '') {
      alert('Your Email is empty.');
      return false;
  }
});
