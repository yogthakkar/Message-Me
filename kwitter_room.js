
//ADD YOUR FIREBASE LINKS HERE

var welcome = localStorage.getItem("User_Name");

document.getElementById("user_name").innerHTML = "Welcome " + welcome + "!";

var firebaseConfig = {
      apiKey: "AIzaSyDHfjcZYAAD-U3eyYMU_l4Mm91EC6KN7Mw",
      authDomain: "kwitter-b3ffd.firebaseapp.com",
      databaseURL: "https://kwitter-b3ffd-default-rtdb.firebaseio.com",
      projectId: "kwitter-b3ffd",
      storageBucket: "kwitter-b3ffd.appspot.com",
      messagingSenderId: "623796732790",
      appId: "1:623796732790:web:8d52ccc74e47345b7bf057"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id);'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) 
{ 
    console.log(name); 
    localStorage.setItem("room_name", name); 
    window.location = "kwitter_page.html"; 
} 

function logout()
{
      localStorage.removeItem("User_Name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

