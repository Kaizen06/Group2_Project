// // Get elements
// const authButton = document.getElementById('authButton');
// const signInModal = document.getElementById('signInModal');
// const closeModal = document.getElementById('closeModal');
// const signInForm = document.getElementById('signInForm');
// const openSignIn = document.getElementById('openSignIn');

// // State to track sign-in status
// let isSignedIn = false;

// // Open modal on "Log In" link click
// openSignIn.addEventListener('click', (e) => {
//     e.preventDefault();
//     signInModal.style.display = 'flex';
// });

// // Open modal on button click
// authButton.addEventListener('click', () => {
//     if (isSignedIn) {
//         isSignedIn = false;
//         authButton.textContent = 'Sign Up';
//         alert('You have logged out!');
//     } else {
//         signInModal.style.display = 'flex';
//     }
// });

// // Close modal
// closeModal.addEventListener('click', () => {
//     signInModal.style.display = 'none';
// });

// // Handle form submission
// signInForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (email && password) {
//         isSignedIn = true;
//         authButton.textContent = 'Log Out';
//         alert(`Signed in as ${email}`);
//         signInModal.style.display = 'none';
//         signInForm.reset();
//     }
// });

// // Close modal if clicking outside
// window.addEventListener('click', (event) => {
//     if (event.target === signInModal) {
//         signInModal.style.display = 'none';
//     }
// });

// Get elements
const authButton = document.getElementById('authButton');
const signUpModal = document.getElementById('signUpModal');
const closeModal = document.getElementById('closeModal');
const signUpForm = document.getElementById('signUpForm');

// State to track sign-in status
let isSignedUp = false;

// Open modal
authButton.addEventListener('click', () => {
    if (isSignedUp) {
        // If already signed in, log out
        isSignedUp = false;
        authButton.textContent = 'Sign Up';
        alert('You have logged out!');
    } else {
        // Open the modal
        signUpModal.style.display = 'flex';
    }
});

// Close modal
closeModal.addEventListener('click', () => {
    signUpModal.style.display = 'none';
});

// Handle form submission
signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        isSignedUp = true;
        authButton.textContent = 'Log Out';
        alert(`Signed up as ${username}`);
        signUpModal.style.display = 'none';
        signUpForm.reset();
    }
});

// Close modal if clicking outside
window.addEventListener('click', (event) => {
    if (event.target === signUpModal) {
        signUpModal.style.display = 'none';
    }
});