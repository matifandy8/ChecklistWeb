"use client";

import Link from "next/link";
import "./styles.css";
import { useSession, signOut } from "next-auth/react";


export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="nav">
      <div className="navbar-container">
        <Link href="/" className="nav-logo"><img src="/checklistweb-logo.png" alt="checklist logo" /></Link>
        <Link className="nav-logo-mobile" href="/"><img src="/logo-i-checklistweb.png" alt="checklist logo" /></Link>
        <ul className="nav-links">
          {session?.user ? (
            <div className="nav-item">
              <li className="nav-item nb-button orange rounded">
                <Link href="/dashboard">Dashboard</Link>
              </li>
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
            </div>
          ) : (
            <Link
              href="/login"
              className="nav-item nb-button green rounded"
            >
              Sign In
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}
