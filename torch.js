const lightBox = document.getElementById('lightBox');
const toggleButton = document.getElementById('toggle-button');
let isLightOn = false;

toggleButton.addEventListener('click', function() {
    isLightOn = !isLightOn;
    if (isLightOn) {
        lightBox.style.backgroundColor = 'yellow';
        toggleButton.textContent = 'Turn Off';
    } else {
        lightBox.style.backgroundColor = '#333';
        toggleButton.textContent = 'Turn On';
    }
});
