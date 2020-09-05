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

// https://www.javascripttutorial.net/javascript-dom/javascript-form/

var memberLoggedIn = "No";

function memberreply(){
    // alert("Status: "+memberLoggedIn)
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;

    if(!fname || !lname || !email || !email){

    document.getElementById("formComments").innerHTML = "Please populate all fields";
    document.getElementById("memberResponse").style.display = "block";
    document.getElementById("formComments").style.background = "red";
    
    } else {
    document.getElementById("formComments").innerHTML = "Thanks for signing up "+ fname + "!";
    document.getElementById("memberResponse").style.display = "block";
    document.getElementById("formComments").style.fontSize = "2em";
    document.getElementById("formComments").style.background = "white";
    document.getElementById("membershipform").style.display = "none";
    document.getElementById("loginWrapper").style.display = "block";
    memberLoggedIn = "Yes"
    }
    // alert("Status: "+memberLoggedIn)
}

function memberJoin(){
    document.getElementById("joinWrapper").style.display = "block";
    document.getElementById("memberYesNo").style.display = "none";
    document.getElementById("loginWrapper").style.display = "none";
}


function memberLogin(){
    alert('Hello daar')
    window.location.href = "member.html";
}

// LOGIN SYSTEM
// https://www.youtube.com/watch?v=UAu7cMuu0BI