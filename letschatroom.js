var firebaseConfig = { apiKey: "AIzaSyA5n3Ci4Li6GT8LuFQzd2zcNfwKvkBKIUA",
 authDomain: "kwittertest-ac6c1.firebaseapp.com",
  databaseURL: "https://kwittertest-ac6c1-default-rtdb.firebaseio.com",
   projectId: "kwittertest-ac6c1", 
   storageBucket: "kwittertest-ac6c1.appspot.com",
 messagingSenderId: "1060111363705", 
 appId: "1:1060111363705:web:f623ed22ef6e0ed297aea8" };
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom()
     { room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update
      ({ purpose : "adding room name" });
       localStorage.setItem("room_name", room_name);
        window.location = "letschatpage.html";
     }

     function getData()
      { firebase.database().ref("/").on('value', function(snapshot)
       { document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
             console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row;
             }); }); }
              getData();
        
     function redirectToRoomName(name)
     { console.log(name);
       localStorage.setItem("room_name", name);
   window.location = "letschatpage.html"; 
                }

  function logout()
   {
      localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
        window.location = "index.html"; 
    }            
  