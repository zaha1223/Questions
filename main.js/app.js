let elBtn1 = document.querySelector(".btn1");
let elBtn2 = document.querySelector(".btn2");
let elBtn3 = document.querySelector(".btn3");
let elBody = document.querySelector("body");

elBtn1.addEventListener("click", function () {
  alert("HTML");
  console.log(prompt("HTML tili qachon chiqgan?"));
  console.log(prompt("Body tegida nechta qism boladi?"));
  console.log(prompt("Block va Inline elementlar farqi nimada?"));
  console.log(prompt("'a' tegining qanday static hossalari bor"));
  console.log(prompt("Qanday 'img'lar backgroundda qo'yiladi"));
  elBody.classList.add("css");
});
elBtn2.addEventListener("click", function () {
  alert("CSS");
  console.log(prompt("CSS nima uchun kerak?"));
  console.log(prompt("CSS ni HTML ga necihil usul bilan ulanadi?"));
  console.log(prompt("ID qanday ko'rinishda CSS ga chaqiriladi?"));
  console.log(prompt("'normalize.css' nima?"));
  console.log(prompt("'scss' ning qanday qulaylklari bor?"));
  elBody.classList.add("css");
  elBody.classList.add("java");
});
elBtn3.addEventListener("click", function () {
  alert("Java Script");
  console.log(prompt("Node.js nima?"));
  console.log(prompt("let va const qachon ishlab chiqilgan?"));
  console.log(prompt("Prmitive ma'lumot turiga nimalar kiradi"));
  console.log(prompt("NaN nima?"));
  console.log(prompt("Qanday Data type lar bor?"));
  elBody.classList.add("java");
});
