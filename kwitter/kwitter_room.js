// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyADUqOezdB--iI9_x3s5idz2LmstFTnVUE",
      authDomain: "kwitter-33759.firebaseapp.com",
      databaseURL: "https://kwitter-33759-default-rtdb.firebaseio.com",
      projectId: "kwitter-33759",
      storageBucket: "kwitter-33759.appspot.com",
      messagingSenderId: "711826326540",
      appId: "1:711826326540:web:077fab5a157a2e6608da29"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user").innerHTML = "welcome " + user_name + "!";

    function addroom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
       console.log("room name - " + room_names);
       row = "<div class'room_name' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+ room_names +"</div><hr>";
      //End code
      });});}
getData();
