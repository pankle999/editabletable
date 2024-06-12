// Function to load users from JSON file
function loadUsers(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'users.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}

// Function to handle login
async function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/users');
        const users = await response.json();

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            if (user.tier === 'SLT') {
                window.location.href = 'hub.html';
            } else if (user.tier === 'Leadership') {
                window.location.href = 'leadership.html';
            } else if (user.tier === 'Staff') {
                window.location.href = 'staff.html';
            }
        } else {
            alert('Invalid login');
        }
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
