let darkMode = false;
let emailCopy = document.querySelector("#email");
    emailCopy.addEventListener('click', () => {
  })
  ;
    emailCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(emailCopy.innerText);
    emailCopy.innerText = "L'e-mail a bien été copié !";
  });

function changeDarkMode() {
    if(darkMode) {
        // light mode
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#d4d7ff");
        document.documentElement.style.setProperty("--project-bg-color", "#C2C1FF");
        document.getElementById("dark-light-mode").innerHTML = "Mode sombre ☾";
    } else {
        // dark mode
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "#10042A");
        document.documentElement.style.setProperty("--project-bg-color", "#1e1d46");
        document.getElementById("dark-light-mode").innerHTML = "Mode clair ☼";
    }
}

// bouton scroll up
const btn = document.querySelector('.btn-up');

btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})