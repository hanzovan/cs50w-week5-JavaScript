document.addEventListener('DOMContentLoaded', () => {

    // Set variables
    let input = document.querySelector('#task');
    let submit = document.querySelector('#submit');
    let tasks = document.querySelector('#tasks');    

    // Define function that disable Enter key in the form
    function dis_Enter(e) {
        // if(e.keyCode === 13 || e.which === 13) {
        //     e.preventDefault();
        //     return false;
        // }
        if(e.key === 'Enter') {
            e.preventDefault();
            return false;
        }
    }

    // By default, submit button is disable, Enter is also disable
    submit.disabled = true;
    input.addEventListener('keypress', dis_Enter)

    // When user type something in input, make submit button and Enter key to work again if condition met
    input.onkeyup = () => {

        // If the input don't have any character, also use trim to eliminate space
        if (input.value.trim().length > 0) {
            submit.disabled = false;
            input.removeEventListener('keypress', dis_Enter);

        } else {
            submit.disabled = true;
            input.addEventListener('keypress', dis_Enter);
        }        
    }

    document.querySelector('#form1').onsubmit = () => {
        const task = input.value;
        
        const li = document.createElement('li');
        li.innerHTML = task;

        tasks.append(li);

        input.value = '';

        submit.disabled = true;
        input.addEventListener('keypress', dis_Enter);

        // stop form from submitting
        return false;
    }

})