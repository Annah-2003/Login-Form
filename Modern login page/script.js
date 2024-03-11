document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const rememberCheckbox = document.getElementById("remember");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const username = document.getElementById("user").value;
        const password = document.getElementById("pass").value;
        console.log("Username:", username);
        console.log("Password:", password);
        
       
    });
    
    rememberCheckbox.addEventListener("change", function() {
        if (rememberCheckbox.checked) {
            console.log("Remember me checked");
        } else {
            console.log("Remember me unchecked");
        }
    });
});
