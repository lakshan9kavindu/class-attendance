// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNMlCQQVsM7HVu0-PpqQIlT4y7fi3zZi0",
  authDomain: "class-addmin.firebaseapp.com",
  projectId: "class-addmin",
  storageBucket: "class-addmin.firebasestorage.app",
  messagingSenderId: "500990448706",
  appId: "1:500990448706:web:e204a4aa3cecf1b4bb09db"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

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
