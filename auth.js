// Hardcoded users for demo purposes
// In a real application, this would be handled by a backend server
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'staff', password: 'staff123' }
];

// Check if user is logged in when page loads
$(document).ready(function() {
    checkAuth();
    setupAuthListeners();
});

// Setup authentication related event listeners
function setupAuthListeners() {
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        login(username, password);
    });
}

// Login function
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store auth token in localStorage (in real app, this would be a JWT token)
        localStorage.setItem('authToken', JSON.stringify({
            username: user.username,
            timestamp: new Date().getTime()
        }));
        
        // Redirect to main page
        window.location.href = 'index.html';
    } else {
        $('#loginError')
            .text('Invalid username or password')
            .removeClass('d-none');
    }
}

// Logout function
function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}

// Check if user is authenticated
function checkAuth() {
    const authToken = localStorage.getItem('authToken');
    const currentPage = window.location.pathname.split('/').pop();
    
    if (!authToken && currentPage !== 'login.html') {
        // Not authenticated, redirect to login
        window.location.href = 'login.html';
        return false;
    } else if (authToken && currentPage === 'login.html') {
        // Already authenticated, redirect to main page
        window.location.href = 'index.html';
        return true;
    }
    
    if (authToken) {
        const token = JSON.parse(authToken);
        const now = new Date().getTime();
        const fourHours = 4 * 60 * 60 * 1000;
        
        // Check if token is expired (4 hours)
        if (now - token.timestamp > fourHours) {
            logout();
            return false;
        }
        return true;
    }
    return false;
} 