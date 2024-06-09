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

// Function to perform login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    loadUsers(function(users) {
        var foundUser = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (foundUser) {
            // Redirect based on user tier
            if (foundUser.tier === 'SLT') {
                window.location.href = 'https://pankle999.github.io/rps-bsu/hub.html'; // Redirect SLT to hub site
            } else if (foundUser.tier === 'Leadership') {
                window.location.href = 'leadership.html';
            } else if (foundUser.tier === 'Staff') {
                window.location.href = 'staff.html';
            } else if (foundUser.tier === 'Admin') {
                window.location.href = 'hub.html'; // Redirect admin to hub site
            }
        } else {
            alert('Invalid username or password');
        }
    });

    return false; // Prevent form submission
}
