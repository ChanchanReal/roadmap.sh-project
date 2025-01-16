let alreadyAccepted = JSON.parse(localStorage.getItem('cookieEnabled')) || false;
const cookie = document.querySelector(".js-cookie");
const closeButton = document.querySelector(".js-close-button");
const cookieButton = document.querySelector('.js-cookie-button');

if (alreadyAccepted){
    cookie.remove();
}

closeButton.addEventListener("click", () => {
  cookie.remove();
});

cookieButton.addEventListener('click', () => {
    cookie.remove();
    localStorage.setItem('cookieEnabled', 'true');
});




