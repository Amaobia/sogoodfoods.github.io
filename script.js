document.getElementById("headerButton").onclick = () => {
  document.querySelector("header").style.display = "none";
  document.getElementById("fullscreen").style.display = "inline";
};
document.getElementById("fullscreen").onclick = () => {
  document.querySelector("header").style.display = "flex";
  document.getElementById("fullscreen").style.display = "none";
};