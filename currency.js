document.addEventListener('DOMContentLoaded', function() {

    // Set default submit button to be disabled
    document.querySelector('#submit').disabled = true;

    // When keyup with some value, the button can be used again
    document.querySelector('#currency').onkeyup = function() {
        if (document.querySelector('#currency').value.trim().length > 0) {
            document.querySelector('#submit').disabled = false;
        } else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('form').onsubmit = function() {
        const currency = document.querySelector('#currency').value.toUpperCase();
        fetch('https://api.exchangerate.host/latest?base=USD')
        .then(response => response.json())
        .then(data => {
            
            const rate = data.rates[currency];

            if (rate !== undefined) {

                const li = document.createElement('li');
                li.innerHTML = `${rate.toFixed(3)} ${currency}`;
                document.querySelector('#list').append(li);
                document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}`;

            } else {
                document.querySelector('#result').innerHTML = "Invalid currency";
            }            
        })
        .catch(error => {
            console.log('Error: ', error);
        })

        document.querySelector('#currency').value = '';

        document.querySelector('#submit').disabled = true;

        return false;
    }
    
})