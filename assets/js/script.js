
var directoryEl = document.getElementById("directory");

// changes nav-links to active on click
directoryEl.addEventListener('click', function (event) {
    $(directoryEl.children).removeClass("active");
    $(event.target).addClass("active");
});
