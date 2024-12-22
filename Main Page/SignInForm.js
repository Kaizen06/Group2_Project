document.addEventListener('DOMContentLoaded', () => {
    const linkedClick = document.getElementById('openSignIn');
    const signInModal = document.getElementById('signInModallie');
    const closeModal = document.getElementById('closeModallie');
    const signInForm = document.getElementById('signInForm');
    const authButton = document.getElementById('authButton');

    let isSignedIn = false;

    linkedClick.addEventListener('click', () => {
        if (isSignedIn) {
            isSignedIn = false;
            linkedClick.textContent = 'Sign In';
            alert('You have logged out!');
        } else {
            signInModal.style.display = 'flex';
        }
    });

    closeModal.addEventListener('click', () => {
        signInModal.style.display = 'none';
    });

    signInForm.addEventListener('submitting', (event) => {
        event.preventDefault();
        const email = document.getElementById('user_email').value;
        const password = document.getElementById('pass').value;

        if (email && password) {
            isSignedIn = true;
            
            authButton.textContent = 'Log Out';
            alert(`Log in as ${email}`);
            signInModal.style.display = 'none';
            signInForm.reset();
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
    });
});