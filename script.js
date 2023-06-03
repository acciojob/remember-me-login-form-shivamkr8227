//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    // Check if there are saved login details in local storage
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        const existingUserBtn = document.createElement('button');
        existingUserBtn.id = 'existing';
        existingUserBtn.innerText = 'Login as existing user';
        document.body.appendChild(existingUserBtn);

        existingUserBtn.addEventListener('click', function() {
            const savedUsername = localStorage.getItem('username');
            alert('Logged in as ' + savedUsername);
        });
    }

    const loginForm = document.getElementById('loginForm');
    const rememberCheckbox = document.getElementById('remember');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (rememberCheckbox.checked) {
            const username = usernameInput.value;
            const password = passwordInput.value;

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert('Logged in as ' + usernameInput.value);
    });
});
