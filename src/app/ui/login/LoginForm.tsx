"use client";

import { signIn } from "next-auth/react";
import "./LoginForm.styles.css";

export default function LoginForm() {
    

    return (
        <div className="login-form">
           <button
              onClick={() => signIn("google")}
              className="nav-item nb-button green rounded"
            >
              Sign In with Google
            </button>
            <button onClick={() => signIn("github")} className="nav-item nb-button blue rounded">
              Sign In with GitHub
            </button>
        </div>
    );
}