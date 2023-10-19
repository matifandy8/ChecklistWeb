import Link from "next/link";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar-container">
        <h1 className="nav-logo">DevChecklist</h1>
        <ul className="nav-links">
          <li className="nav-item nb-button orange rounded">
            <Link href="/demo">Demo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
