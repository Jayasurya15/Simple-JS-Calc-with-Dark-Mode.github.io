// Clear screen with C button
function clearScreen() {
    document.getElementById("result").value = "";
}

// Display updates in Result Input
function updScreen(val) {
    var x = document.getElementById("result").value;
    document.getElementById("result").value = x + val;
}

// Calculate the result safely
function calculate() {
    try {
        var expression = document.getElementById("result").value;
        document.getElementById("result").value = Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
        alert("Invalid Expression");
    }
}

// Switch between Dark and Light Modes
function themeSwitcher() {
    var dark = document.getElementById("dark-mode");
    var th = document.getElementById("theme");

    if (th.getAttribute('href') === 'light.css') {
        th.href = 'dark.css';
        dark.innerHTML = 'Light Mode';
        localStorage.setItem('theme', 'dark.css');
    } else {
        th.href = 'light.css';
        dark.innerHTML = 'Dark Mode';
        localStorage.setItem('theme', 'light.css');
    }
}

// Load theme on page load
window.onload = function() {
    var savedTheme = localStorage.getItem('theme') || 'light.css';
    document.getElementById('theme').href = savedTheme;
    document.getElementById("dark-mode").innerHTML = savedTheme === 'light.css' ? 'Dark Mode' : 'Light Mode';
};
