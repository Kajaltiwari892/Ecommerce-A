// login.js
document.querySelector('#login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username === 'user' && password === 'password') {
        alert('Login successful');
        localStorage.setItem('user', username);
        window.location.href = 'index.html'; 
    } else {
        alert('Invalid credentials');
    }
});

// common.js
const user = localStorage.getItem('user');

if (user) {
    document.body.insertAdjacentHTML('beforeend', '<button onclick="logout()">Logout</button>');
}

function logout() {
    localStorage.removeItem('user');
    alert('Logged out successfully');
    window.location.href = 'login.html';
}

