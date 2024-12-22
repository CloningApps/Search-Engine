// script.js
document.querySelector('form').addEventListener('submit', function (event) {
    const query = document.querySelector('input[name="q"]').value;
    if (!query) {
        event.preventDefault();
        alert('Proszę wpisać zapytanie!');
    }
});
