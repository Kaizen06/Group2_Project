const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const input = toggle.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            toggle.classList.replace("fa-eye-slash", "fa-eye");
        } else {
            input.type = 'password';
            toggle.classList.replace("fa-eye", "fa-eye-slash");
        }
    });
});