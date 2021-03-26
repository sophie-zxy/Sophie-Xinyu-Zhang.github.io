function toggleLight() {
  let image = document.getElementById("light-bulb");
  if (image.src.match("on")) {
    image.src = "off.jpeg";
  } else {
    image.src = "on.jpeg";
  }
}
function toggleText() {
  let image = document.getElementById("light-bulb");
  if (image.src.match("on")) {
    return "text-on";
  } else {
    return "text-off";
  }
}
