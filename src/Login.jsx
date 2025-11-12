import React, { useState } from "react";
import "./Login.css";
import { auth, db } from "./firebase"; // Import auth and Firestore
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; // Firestore functions

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password!");
      return;
    }

    try {
      // Try to log in first
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Logged in user:", user.email);
      onLogin();
    } catch (error) {
      // If user does not exist, create automatically
      if (error.code === "auth/user-not-found") {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = userCredential.user;

          // Save user data in Firestore
          await setDoc(doc(db, "users", user.uid), {
            email: email,
            createdAt: new Date()
          });

          console.log("New user created and saved in Firestore:", user.email);
          onLogin();
        } catch (err) {
          alert("Error creating user: " + err.message);
        }
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>

        {/* Optional button */}
        <button
          type="button"
          className="skip-login"
          onClick={onLogin} // directly enter project
        >
          Continue without Login
        </button>
      </form>
    </div>
  );
}

export default Login;
