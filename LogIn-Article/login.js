document.addEventListener('DOMContentLoaded', function() {
    var signupButton = document.getElementById('signupButton');
    var signupDialog = document.getElementById('signupDialog');
    var closeDialog = document.querySelector('.dialog .close');
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');

    signupButton.addEventListener('click', function(e) {
        e.preventDefault();
        signupDialog.style.display = 'flex';
    });

    closeDialog.addEventListener('click', function() {
        signupDialog.style.display = 'none';
    });

    window.addEventListener('click', function(e) {
        if (e.target === signupDialog) {
            signupDialog.style.display = 'none';
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        window.location.href = 'article.html';
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
       
        alert('Sign up successful!');
        signupDialog.style.display = 'none';
    });
});