
const firebaseConfig = {
      apiKey: "AIzaSyCfrfF_zozVkB1N8fhX7RwgxyjVjK809QA",
      authDomain: "cybergram-d4cd5.firebaseapp.com",
      databaseURL: "https://cybergram-d4cd5-default-rtdb.firebaseio.com",
      projectId: "cybergram-d4cd5",
      storageBucket: "cybergram-d4cd5.appspot.com",
      messagingSenderId: "886757924474",
      appId: "1:886757924474:web:6e840e14dcd024d4ec25c3",
      measurementId: "G-2S3L8S2B40"
    };
    firebase.initializeApp(Clonflict)
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;  
      Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
