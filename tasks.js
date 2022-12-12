document.addEventListener('DOMContentLoaded', () => {

    // Set variables
    let input = document.querySelector('#task');
    let submit = document.querySelector('#submit');
    let tasks = document.querySelector('#tasks');

    // By default, submit button is disable
    submit.disabled = true;

    input.onkeyup = () => {

        // If the input don't have any character, also use trim to eliminate space
        if (input.value.trim().length > 0) {
            submit.disabled = false;
        }
        else {
            submit.disabled = true;
        }        
    }

    document.querySelector('#form1').onsubmit = () => {
        const task = input.value;
        
        const li = document.createElement('li');
        li.innerHTML = task;

        tasks.append(li);

        input.value = '';

        submit.disabled = true;

        // stop form from submitting
        return false;
    }

    // Disable Enter key for this form's input
    input.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            return false;
        }
    })

})