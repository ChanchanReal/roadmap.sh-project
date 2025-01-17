let selected = "0";

const tabContent = [
  { message: "First Tab content to be display here." },
  { message: "Second Tab content to be display here." },
  { message: "Third Tab content to be display here." },
  { message: "Fourth Tab content to be display here." },
];

document.querySelectorAll(".nav").forEach((nav) => {
  if (nav.dataset.id === selected) {
    nav.classList.add("nav-selected");
  }

  nav.addEventListener("click", () => {
    document.querySelectorAll(".nav").forEach((nav) => {
      nav.classList.remove("nav-selected");
    });

    nav.classList.add("nav-selected");
    selected = nav.dataset.id;
    const content = tabContent[selected]; 
    document.querySelector('.tab-content').innerText = content.message;
  });
});
