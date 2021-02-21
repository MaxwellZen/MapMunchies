var back = document.getElementById("backgroundimg");
back.width = innerWidth;
back.height = innerHeight;

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  document.location = "index.html";
}