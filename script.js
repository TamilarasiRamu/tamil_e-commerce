function login(event) {
  event.preventDefault();
  localStorage.setItem("loggedIn", "true");
  window.location.href = "index.html";
}

function register(event) {
  event.preventDefault();
  localStorage.setItem("loggedIn", "true");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const loggedIn = localStorage.getItem("loggedIn");

  const loginLink = document.getElementById("login-link");
  const registerLink = document.getElementById("register-link");
  const logoutLink = document.getElementById("logout-link");

  if (loggedIn === "true") {
    if (loginLink) loginLink.style.display = "none";
    if (registerLink) registerLink.style.display = "none";
    if (logoutLink) logoutLink.style.display = "inline";
  }

  if (logoutLink) {
    logoutLink.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      window.location.href = "login.html";
    });
  }
});

function submitContact(event) {
  event.preventDefault();
  
  let name = document.getElementById("contact-name").value;
  let email = document.getElementById("contact-email").value;
  let message = document.getElementById("contact-message").value;

  document.getElementById("contact-response").innerText =
    `Thank you ${name}! We received your message and will reply to ${email}.`;

  // Clear form
  document.getElementById("contact-name").value = "";
  document.getElementById("contact-email").value = "";
  document.getElementById("contact-message").value = "";
}

localStorage.setItem('isLoggedIn', 'true');


function toggleLike(button) {
  const productName = button.parentElement.querySelector('h3').textContent;
  let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];

  if (button.classList.contains('liked')) {
    // Remove from wishlist
    likedItems = likedItems.filter(item => item !== productName);
    button.classList.remove('liked');
    button.textContent = '❤️';
  } else {
    // Add to wishlist
    likedItems.push(productName);
    button.classList.add('liked');
    button.textContent = '💖';
  }

  localStorage.setItem('likedItems', JSON.stringify(likedItems));
}
