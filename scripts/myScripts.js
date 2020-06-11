function myFunction() {
    var x = document.getElementById("nav-list-id");
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
  }