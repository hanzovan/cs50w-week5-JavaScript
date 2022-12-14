document.addEventListener('DOMContentLoaded', function() {

    // Set variables
    let input = document.querySelector('#currency');
    let submit = document.querySelector('#submit');
    let form = document.querySelector('#exchange-form');
    let source = 'https://api.exchangerate.host/latest?base=USD';
    let result = document.querySelector('#list');
    let note = document.querySelector('#result');

    // function to disable Enter button in the input field
    function enter_disable(e) {
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            return false;
        }
    }

    // Set default submit button and enter button to be disabled
    submit.disabled = true;
    input.addEventListener('keypress', enter_disable);

    // When keyup with some value, the button can be used again
    input.onkeyup = function() {
        if (input.value.trim().length > 0) {
            submit.disabled = false;
            input.removeEventListener('keypress', enter_disable);
        } else {
            submit.disabled = true;
            input.addEventListener('keypress', enter_disable);
        }
    }

    form.onsubmit = function() {
        const currency = input.value.toUpperCase();
        fetch(source)
        .then(response => response.json())
        .then(data => {
            
            const rate = data.rates[currency];

            if (rate !== undefined) {

                const li = document.createElement('li');
                li.innerHTML = `${rate.toFixed(3)} ${currency}`;
                result.append(li);
                note.innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}`;

            } else {
                note.innerHTML = "Invalid currency";
            }            
        })
        .catch(error => {
            console.log('Error: ', error);
        })

        input.value = '';

        submit.disabled = true;
        input.addEventListener('keypress', enter_disable);

        return false;
    }
    
})