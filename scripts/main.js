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