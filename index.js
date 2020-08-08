const logo = document.getElementById("logo");
const icons = document.getElementsByClassName("icon-inner");


logo.addEventListener("onscroll", (event) => {
  console.log(event.target.scrollHeight + 50);
});

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("logo").className = "logoSmallerAnime";
    document.getElementById("logo").removeAttribute("id");
  } else {
    document.getElementsByTagName("img"[0]).className = "logoLargerAnime";
  }
}


