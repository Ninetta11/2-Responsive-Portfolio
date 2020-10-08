
var directoryEl = document.getElementById("directory");


directoryEl.addEventListener('click', function (event) {
    $(directoryEl.children).removeClass("active");
    $(event.target).addClass("active");
})
