import '../css/style.css';

const welcome: string = 'typescript';
console.log(welcome);

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear().toString();
});
