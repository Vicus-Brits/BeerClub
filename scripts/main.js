function myFunction() {
    var y = document.getElementById("toggle_navbar_id");

    if (y.className == "navbar_ul") {
        y.className = "navbar_hide";
    } else {
        y.className = "navbar_ul";
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}