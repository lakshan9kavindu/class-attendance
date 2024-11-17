  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB8-bOsX6lOglX5XfUvQJQsEwESGPoo3f4",
    authDomain: "test-1-89304.firebaseapp.com",
    projectId: "test-1-89304",
    storageBucket: "test-1-89304.firebasestorage.app",
    messagingSenderId: "369256468824",
    appId: "1:369256468824:web:03559c06a86ce7e9e5152d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Handle Login
if (document.getElementById("loginForm")) {
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        document.getElementById("error").innerText = error.message;
      });
  });
}

// Handle Logout
if (document.getElementById("logoutButton")) {
  const logoutButton = document.getElementById("logoutButton");
  logoutButton.addEventListener("click", () => {
    auth.signOut().then(() => {
      window.location.href = "index.html";
    });
  });
}

// Protect Dashboard
if (window.location.pathname.endsWith("dashboard.html")) {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      alert("You need to log in first.");
      window.location.href = "index.html";
    }
  });
}
