import "./style.css";

(() => {
  const container = document.getElementById("container");
  const element = document.createElement("div");

  element.classList.add('text-4xl','text-blue-600');
  element.innerText = "Hello world";

  container.appendChild(element);
})();
