const txtAreaElement = document.querySelector(".js-textarea");
const inputCounterElement = document.querySelector(".js-input-counter");

const maxLimit = 250;

txtAreaElement.addEventListener("keydown", () => {
  const characterCount = txtAreaElement.value.length;

  inputCounterElement.innerText = `${characterCount} / ${maxLimit}`;
  if (characterCount === maxLimit) {
    txtAreaElement.classList.add("max-limit");
  } else {
    txtAreaElement.classList.remove("max-limit");
  }

  console.log(counter);
});
