"use client";

import { signIn } from "next-auth/react";
import "./LoginForm.styles.css";

export default function LoginForm() {
    

    return (
        <div className="login-form">
           <button
              onClick={() => signIn("google")}
              className="nav-item nb-button default"
            >
              <img className="icon" src="/google.svg" alt="google icon" />
              <span>Sign in with Google</span>
            </button>
            <button onClick={() => signIn("github")} className="nav-item nb-button default">
              <img className="icon" src="/github.svg" alt="github icon" />
              <span>Sign in with Github</span>
            </button>
        </div>
    );
}