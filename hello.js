document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        document.querySelector('#greeting').innerHTML = `Hello, ${name}!`;

        // Prevent form from submitting
        return false;
    }
})