let number = document.querySelector(".advice__span");
let adviceText = document.querySelector(".advice__text");
let btn = document.querySelector(".reloade");
let shape = document.querySelector(".reload__img");

btn.addEventListener("click", async () => {
  btn.setAttribute("disabled", true);

  shape.style.transform = "rotate(360deg)";

  await getData();
  await showAdvice();

  shape.style.transform = "rotate(0deg)";
  btn.removeAttribute("disabled");
});

let data = null;
async function getData() {
  let res = await fetch("https://api.adviceslip.com/advice");
  data = await res.json();
  console.log(data);
}

async function showAdvice() {
  adviceText.innerHTML = "“" + data.slip.advice + "”";
  number.innerHTML = data.slip.id;
}
