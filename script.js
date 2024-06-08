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

// Dummy function to perform login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    loadUsers(function(users) {
        var foundUser = users.find(function(user) {
            return user.username === username && user.password === password;
        });

        if (foundUser) {
            alert('Login successful! Welcome, ' + foundUser.username + '.');
            // Redirect to main page or perform other actions
        } else {
            alert('Invalid username or password');
        }
    });

    return false; // Prevent form submission
}
