
$(document).ready(function () {
    console.log("Page loaded!")

    var firebaseConfig = {
        apiKey: "AIzaSyC58ZRYZVOIVT7avMPItHaFOB_pdAEZJJ8",
        authDomain: "vegfinder-1ff47.firebaseapp.com",
        databaseURL: "https://vegfinder-1ff47.firebaseio.com",
        projectId: "vegfinder-1ff47",
        storageBucket: "",
        messagingSenderId: "817772042133",
        appId: "1:817772042133:web:3aaa943319973970"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
    
    //   Get Elements
    
    var txtEmail = document.getElementById("txtEmail");
    var txtPassword = document.getElementById("txtPassword");
    var btnLogin = document.getElementById("btnLogin");
    var btnSignUp = document.getElementById("btnSignUp");
    var btnLogout = document.getElementById("btnLogout");
    
    // Add Login Event
    btnLogin.addEventListener('click', e => {
        var email = txtEmail.value;
        var password = txtPassword.value;
        var auth = firebase.auth();
    
        // Sign in
        var promise = auth.signInWithEmailAndPassword(email, pass)
        promise.catch(e => console.log(e.message)); 
        
    });
    
    
    function populateCards() {



    $.ajax({
        method: "GET",
        url: "https://www.vegguide.org&app_id=be4fe4b1&app_key=1df2de406febf312f1f26db11721ee7e",
        
    })
        .then(function(response) {
            var results = response.data;
            console.log(results)
        });

    };

});
// MAIN URL = "https://api.edamam.com/search"
// APIKEY = "1df2de406febf312f1f26db11721ee7e"
// APPID = "be4fe4b1"