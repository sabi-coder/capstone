console.log("hello");

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("I am submitted!");
});

console.log(form);
