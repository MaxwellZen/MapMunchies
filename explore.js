var info = [[['6', 'Maxwell Zen', 'https://lh3.googleusercontent.com/a-/AOh14GhKx05Ufson8VKJ_uvFw6wvA0ik0oPG3MbhqgKg2w=s96-c', 'asdf;lkj', 'mzen20@stuy.edu'], ['1', 'Xiaoshen Ma', 'https://www.hobbydb.com/processed_uploads/subject_photo/subject_photo/image/30900/1504725344-16834-3961/CARL_large.jpeg', 'the sweets were very pog champ', 'xma20@stuy.edu']], [['3', 'Maxwell Zen', 'https://lh3.googleusercontent.com/a-/AOh14GhKx05Ufson8VKJ_uvFw6wvA0ik0oPG3MbhqgKg2w=s96-c', 'This is a new post in order to test the extent of my overwhelming sexiness', 'mzen20@stuy.edu'], ['2', 'Jennifer Sun', 'https://www.usajacket.com/blog/wp-content/uploads/2017/07/Gru-Costume-810x427.jpg', 'the pizza was very pog champ', 'jsun20@stuy.edu']], [['5', 'Maxwell Zen', 'https://lh3.googleusercontent.com/a-/AOh14GhKx05Ufson8VKJ_uvFw6wvA0ik0oPG3MbhqgKg2w=s96-c', 'testing testing 1 2 3 xiaoshen got more sleep than me', 'mzen20@stuy.edu'], ['4', 'Maxwell Zen', 'https://lh3.googleusercontent.com/a-/AOh14GhKx05Ufson8VKJ_uvFw6wvA0ik0oPG3MbhqgKg2w=s96-c', 'This is the power of my immense reservoir of brain cells', 'mzen20@stuy.edu'], ['0', 'Maxwell Zen', 'https://i.pinimg.com/originals/bd/a4/04/bda404f24a6471f3319e190bc99e3b91.jpg', 'the tea was very pog champ', 'mzen20@stuy.edu']]];
var pos = [];
for (var i = 0; i < info.length; i++) {
    pos.push(0);
}
var light = 0;
function nxt(r) {
    pos[r] += 1;
    if (pos[r]==info[r].length) {
        pos[r]=0;
    }
    document.getElementById("name" + r.toString()).innerHTML = info[r][pos[r]][1];
    document.getElementById("pfp" + r.toString()).src = info[r][pos[r]][2];
    document.getElementById("message" + r.toString()).innerHTML = info[r][pos[r]][3];
    document.getElementById("nxt" + r.toString()).innerHTML = "Next Story " + (pos[r]+1).toString() + "/" + info[r].length.toString();
}

function toggle() {
    light += 1;
    document.getElementById("aroundmap").innerHTML="<div id='mapid'></div>";
    create();
}

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  document.getElementById('profileinfo').innerHTML = "<br><a>" + profile.getName() + "</a>" + "<a href='mailto:'" + profile.getEmail() + "'>" + profile.getEmail() + "</a><br><img style='margin-left: 32px;' src='" + profile.getImageUrl() + "'/>";
  document.getElementById('signin').style.display="none";
  document.getElementById('signout').style.display="block";
  // document.location = "index.html";
}
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    document.location = "login.html";
  });
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function create() {
    var myIcon = L.icon({
        iconUrl: 'https://images.vexels.com/media/users/3/185225/isolated/preview/cc21d796204923937547f509844f7eba-hamburger-icon-hamburger-by-vexels.png',
        iconSize: [50, 60],
        iconAnchor: [25, 30],
//

//
    })
    var mymap = L.map('mapid').setView([40.7, -74], 10);
    if (light%2==0) {
        L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoieGlhb3BpZXMiLCJhIjoiY2tsZW4zcnk1MWxyaTJvcWVrb2ZuZWRjaSJ9.oehEvW7g2zi8R69mZhanrA", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoieGlhb3BpZXMiLCJhIjoiY2tsZW4zcnk1MWxyaTJvcWVrb2ZuZWRjaSJ9.oehEvW7g2zi8R69mZhanrA'
        }).addTo(mymap);
    } else {
        L.tileLayer("https://api.mapbox.com/styles/v1/xiaopies/cklfbn8nn3l9217p29ksw65el/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieGlhb3BpZXMiLCJhIjoiY2tsZW4zcnk1MWxyaTJvcWVrb2ZuZWRjaSJ9.oehEvW7g2zi8R69mZhanrA", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        // id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        // accessToken: 'pk.eyJ1IjoieGlhb3BpZXMiLCJhIjoiY2tsZW4zcnk1MWxyaTJvcWVrb2ZuZWRjaSJ9.oehEvW7g2zi8R69mZhanrA'
        }).addTo(mymap);
    }

    /*markers*/
}

create();
