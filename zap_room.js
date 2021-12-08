var firebaseConfig = {
      apiKey: "AIzaSyAjuyq4CasUGidAjpfZv48TxwcizsgkHEQ",
      authDomain: "project-zap-55173.firebaseapp.com",
      databaseURL: "https://project-zap-55173-default-rtdb.firebaseio.com",
      projectId: "project-zap-55173",
      storageBucket: "project-zap-55173.appspot.com",
      messagingSenderId: "723914644944",
      appId: "1:723914644944:web:59a8199c1d164383d16dd5",
      measurementId: "G-QN5HM55WSF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "zap_room.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "zap_room.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "zap.html";
}