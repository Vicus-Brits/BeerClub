
// Use 'burger' icon to collapse meny bar while on mobile view
function burgerToggle() {
    var y = document.getElementById("toggle_navbar_id");

    if (y.className == "navbar_ul") {
        y.className = "navbar_hide";
    } else {
        y.className = "navbar_ul";
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Call external API for a fresh joke (index.html)
// http://zetcode.com/javascript/jsonurl/
function myJokeFunction () {    
    $.getJSON('https://sv443.net/jokeapi/v2/joke/Programming?type=single', function(joke) {
        var text = `<br>${joke.joke}<br>`
        $(".myjoke").html(text);
    });
}

// Manipulate the DOM (learn.html) to present articles based on what the user would like to see
    function readBeer() {
        var myBrews = document.querySelectorAll('.brew_article'),
            i = 0,
            l = myBrews.length;
        
        for (i; i < l; i++) {
            myBrews[i].style.display = 'none';
        }

        var myBeers = document.querySelectorAll('.beer_article'),
        i = 0,
        l = myBeers.length;

        for (i; i < l; i++) {
            myBeers[i].style.display = 'block';
        }

    }

    function readBrews() {
        var myBrews = document.querySelectorAll('.brew_article'),
            i = 0,
            l = myBrews.length;
        
        for (i; i < l; i++) {
            myBrews[i].style.display = 'block';
        }

        var myBeers = document.querySelectorAll('.beer_article'),
        i = 0,
        l = myBeers.length;

        for (i; i < l; i++) {
            myBeers[i].style.display = 'none';
        }
    }

    function readBoth() {
        var myBrews = document.querySelectorAll('.brew_article'),
            i = 0,
            l = myBrews.length;
        
        for (i; i < l; i++) {
            myBrews[i].style.display = 'block';
        }

        var myBeers = document.querySelectorAll('.beer_article'),
        i = 0,
        l = myBeers.length;

        for (i; i < l; i++) {
            myBeers[i].style.display = 'block';
        }

    }


// CREATE LOG IN FUNCTIONALITY
// https://www.youtube.com/watch?v=UAu7cMuu0BI
// These passwords are not secure and needs to move to a database
// The page is also not secure as you can navigate to the url 
// TOD : Upgrade username and password control to secure database driven system

var memberLoggedIn;
var userName;
var userPassword;

var objPeople = [
    {
    username:  "UoL", 
    password:  "UoL"
    }, 
    {
        username:  "Temp", 
        password:  "Temp"
    }, 
    {
        username:  "Vicus", 
        password:  "123"
    }
]

// This function checks the user name and password against a hard coded list
// called from join.html
function memberLogin(){
var userName = document.getElementById("uname").value
var userPassword = document.getElementById("pword").value
// loop through the hardcoded list of usename and password objPeople
for(i = 0; i< objPeople.length; i++) {
    if (userName == objPeople[i].username && userPassword  == objPeople[i].password) {
            localStorage.setItem("mLI", 'Yes'); // https://stackoverflow.com/questions/23476732/set-javascript-global-variables-across-multiple-pages
            window.location.href = "member.html"; // log in user is directed to the members only area
            return
    } 
}
// present error message
document.getElementById("formComments").innerHTML = "Oops, That is not the correct User Name and/or Password";
document.getElementById("memberResponse").style.display = "block";
}

// Users can log out from the membership area (member.html) as well as join.html 
function memberLogOut(){
    // // set user logged in to No and return to home screen
    localStorage.setItem("mLI", 'No');
    memberLoggedIn = localStorage.getItem("mLI");
    window.location.href = "index.html";
}

// This runs with every page refresh 
function checkLogIn(){
    // retrieve log in status
    memberLoggedIn = localStorage.getItem("mLI");
    // display Member area in navigation bar based on whether the user is logged in or not 
    if (memberLoggedIn == "Yes"){
        document.getElementById("memberarea_li").style.display = "block";
        // if logged in, remove the login and join options from join.html and add a log out option
        document.getElementById("loginWrapper").style.display = "none";
        document.getElementById("joinWrapper").style.display = "none";
        document.getElementById("memberYesNo").style.display = "none";
        document.getElementById("joinlogOut").style.display = "block";

    } else {
        document.getElementById("memberarea_li").style.display = "none";
    }
}

// This function is called when the user indicates that he/she is not a member (join.html) 
// Action: The Log In Form and [Are you a member buttons] are hidden and the Join form with Join Button is presented
function memberJoin(){
    // https://www.javascripttutorial.net/javascript-dom/javascript-form/
    document.getElementById("memberYesNo").style.display = "none";
    document.getElementById("loginWrapper").style.display = "none";
    document.getElementById("joinWrapper").style.display = "block";
}

// This function is called when user fills in the join form (join.html)
function memberreply(){
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;

    if(!fname || !lname || !email){ // form validation error handling
    document.getElementById("formComments").innerHTML = "Please populate all fields";
    document.getElementById("memberResponse").style.display = "block";
    document.getElementById("formComments").style.background = "red";
    } else {  // all three fields captured 
    document.getElementById("formComments").innerHTML = "Thanks for signing up "+ fname + "!, Please use UserName = UoL and Password = UoL to sign in";
    document.getElementById("memberResponse").style.display = "block";
    document.getElementById("formComments").style.fontSize = "1.5em";
    document.getElementById("formComments").style.background = "white";
    // remove the sign up form and display the login form
    // for now we prepopulate the login form with a working user name and password
    // TODO: do this properly once you figure out how to talk to a database :) 
    document.getElementById("membershipform").style.display = "none";
    document.getElementById("loginWrapper").style.display = "block";
    document.getElementById("uname").value = 'UoL';
    document.getElementById("pword").value = 'UoL';
    memberLoggedIn = "Yes";
    localStorage.getItem("mLI") = memberLoggedIn;
    }
}


