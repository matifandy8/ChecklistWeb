"use client";

import Link from "next/link";
import "./styles.css";
import { useSession, signOut } from "next-auth/react";


export default function Navbar() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="nav">
      <div className="navbar-container">
        <h1 className="nav-logo"><Link href="/">ChecklistWeb</Link></h1>
        <ul className="nav-links">
          <li className="nav-item nb-button orange rounded">
            <Link href="/demo">Demo</Link>
          </li>
          {session?.user ? (
            <div className="nav-item">
              <Link href="/dashboard">Dashboard</Link>
              <p>
                {session.user.name} {session.user.email}
              </p>
            
              <button
                onClick={async () => {
                  await signOut({
                    callbackUrl: "/",
                  })
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <a
              href="/login"
              className="nav-item nb-button green rounded"
            >
              Sign In
            </a>
          )}
        </ul>
      </div>
    </nav>
  );
}
