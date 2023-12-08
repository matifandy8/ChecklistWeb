"use client";

import { useFormState } from "react-dom";
import { authenticate } from '@/app/lib/actions';


export default function LoginForm() {
    const [state, dispatch] = useFormState(authenticate, undefined);

    return (
        <div className="login-form">
            <form action={dispatch}>
                <input
                    className="nb-input default"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required />
                <input
                    className="nb-input default"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6} />
                <button className="nb-button green" type="submit">Login</button>
            </form>
        </div>
    );
}