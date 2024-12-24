// Get elements
const authButton = document.getElementById('authButton');
const signInModal = document.getElementById('signInModal');
const closeModal = document.getElementById('closeModal');
const signInForm = document.getElementById('signInForm');

// State to track sign-in status
let isSignedIn = false;

// Open modal
authButton.addEventListener('click', () => {
    if (isSignedIn) {
        // If already signed in, log out
        isSignedIn = false;
        authButton.textContent = 'Sign In';
        alert('You have logged out!');
    } else {
        // Open the modal
        signInModal.style.display = 'flex';
    }
});

// Close modal
closeModal.addEventListener('click', () => {
    signInModal.style.display = 'none';
});

// Handle form submission
signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        isSignedIn = true;
        authButton.textContent = 'Log Out';
        alert(`Signed in as ${email}`);
        signInModal.style.display = 'none';
        signInForm.reset();
    }
});

// Close modal if clicking outside
window.addEventListener('click', (event) => {
    if (event.target === signInModal) {
        signInModal.style.display = 'none';
    }
});