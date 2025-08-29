const toggleBtn = document.getElementById('theme-toggle');

function setLightTheme() {
    document.body.classList.remove('dark-theme');
    document.body.style.background = 'linear-gradient(135deg, #2f6fc2 0%, #4182a8 100%)';
    document.body.style.color = '#fff';
    toggleBtn.textContent = '☀️'; // Sun icon
}

function setDarkTheme() {
    document.body.classList.add('dark-theme');
    document.body.style.background = '#121212';
    document.body.style.color = '#f5f5f5';
    toggleBtn.textContent = '🌙'; // Moon icon
}

// Event listener for navbar button toggle
toggleBtn.addEventListener('click', () => {
    if(document.body.classList.contains('dark-theme')){
        setLightTheme();
    } else {
        setDarkTheme();
    }
});
