// Check whether the system has dark mode set
let systemIntiatedDark = window.matchMedia("(prefers-color-scheme: dark)");

// Check for session storage telling to override the system preferences
let theme = sessionStorage.getItem('theme');

// Based on the current mode, display the text of the button in light or dark mode
if (systemInitiatedDark.matches) {
  document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else {
  document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

// Event Listener
// Detect if the system preferences change. Changes the site to match the system preferences
function prefersColorTest(systemInitiatedDark) {
  if (systemIntiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-toggle').innerHTML = "Light Mode";
    // Clear session storage
    sessionStorage.setItem('theme', '');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('theme-toggle').innerHTML = "Dark Mode";
    sessionStorage.setItem('theme', '');
  }
}
systemIntiatedDark.addListener(prefersColorTest);

// Function to figure out which state the mode is in
// State 1: User selected dark mode (overridden)
// State 2: User selected light mode (overridden)
// State 3: System set light mode
// State 4: System set dark mode

function modeSwitcher() {
  // Check for overrides
  let theme = sessionStorage.getItem('theme');
  // Check if reader selected dark mode
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
    document.getElementById('theme-toggle').innerHTML = "Dark Mode";
    // Check if reader selected light mode
  } else if (theme === "light") {
    document.documentElement.setAttribute("dark-theme", 'dark');
    sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "Light Mode";
  }
}
