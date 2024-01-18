"use client"
import { signOut } from "next-auth/react";

export default function ButtonLogout() {
    

    return (
        <button
            onClick={async () => {
                await signOut({
                    callbackUrl: "/",
                })
            }}
            className="nav-item nb-button default rounded"
        >
            Logout
        </button>
    );
}