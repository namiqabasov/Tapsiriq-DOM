const btn = document.getElementById("btn");
const box = document.getElementById("box");

btn.addEventListener("click", function () {
  box.style.cssText = `
  
      width: 200px;
      height: 200px;
      margin:0 auto;
      transition:0.5s;
  `;
  box.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
});
