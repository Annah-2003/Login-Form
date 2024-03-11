document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-box form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        
        const username = document.getElementById('user').value.trim();
        const password = document.getElementById('pass').value.trim();
        
       
        console.log("Username:", username);
        console.log("Password:", password);
        
        
    });
});
