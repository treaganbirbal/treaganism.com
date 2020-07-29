const wrap = document.getElementById("logo");
console.log(wrap.scrollTop);
let y = wrap.scrollTop;
console.log(y);
wrap.addEventListener("click", (e) => {
  console.log(e);
});
