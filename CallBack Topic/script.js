function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("Loaded Script with src : " + src);
    callback(null, src);
  };
  script.onerror = function () {
    callback(new error("You Getting the Error "));
  };
  document.body.appendChild(script);
}

function signal(error, src) {
  if (error) {
    console.log(error);
    return;
  }
  alert("Its Done And Src : " + src);
}
loadScript(
  "https://cdn.jsdelivr net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
  signal
);
