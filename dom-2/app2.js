const btn1 = document.getElementById("btn1");
btn1.style.backgroundColor = "red";

const btn2 = document.getElementById("btn2");
btn2.style.backgroundColor = "yellow";

const btn3 = document.getElementById("btn3");
btn3.style.backgroundColor = "green";
btn3.style.transition;

const box = document.getElementById("box");

btn1.onclick = function () {
  box.style.cssText = `

    background-color: red;
    width: 100px;
    height: 70px;
    margin:0 auto;
    transition:0.5s;
`;
};

btn2.onclick = function () {
  box.style.cssText = `
  
      background-color: yellow;
      width: 100px;
      height: 70px;
      margin:0 auto;
      transition:0.5s;
  `;
};

btn3.onclick = function () {
  box.style.cssText = `
  
      background-color: green;
      width: 100px;
      height: 70px;
      margin:0 auto;
      transition:0.5s;
  `;
};
