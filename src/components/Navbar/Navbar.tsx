import Link from "next/link";
import "./styles.css";
import { getServerSession } from 'next-auth'
import ButtonLogout from "./ButtonLogout";

export default async function Navbar() {
  const session = await getServerSession({ required: true, callbacks: {} })


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
              <ButtonLogout />
              <div className="avatar bg-pale-red">
                <img className="avatar-img" src={session?.user?.image || '/default-avatar.png'} alt="Avatar" />
              </div>
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
