"use client";

import Link from "next/link";
import "./styles.css";
import { useSession, signOut } from "next-auth/react";


export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="nav">
      <div className="navbar-container">
        <h1 className="nav-logo"><Link href="/">ChecklistWeb</Link></h1>
        <ul className="nav-links">
          {session?.user ? (
            <div className="nav-item">
              <li className="nav-item nb-button orange rounded">
                <Link href="/dashboard">Dashboard</Link>
              </li>
              {/* <p>
                {session.user.name}
              </p> */}

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
