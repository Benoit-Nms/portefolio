let darkMode = false;

function changeDarkMode() {
    if(darkMode) {
        // light mode
        darkMode = false;
        document.documentElement.style.setProperty("--text-color", "black");
        document.documentElement.style.setProperty("--background-color", "#d4d7ff");
        document.documentElement.style.setProperty("--project-bg-color", "#C2C1FF");
        document.getElementById("dark-light-mode").innerHTML = "Mode sombre";
    } else {
        // dark mode
        darkMode = true;
        document.documentElement.style.setProperty("--text-color", "white");
        document.documentElement.style.setProperty("--background-color", "#10042A");
        document.documentElement.style.setProperty("--project-bg-color", "#1e1d46");                
        document.getElementById("dark-light-mode").innerHTML = "Mode clair";    
    }        
}