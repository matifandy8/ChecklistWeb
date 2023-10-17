import Link from "next/link";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="navbar-container">
        <h1>Navbar</h1>
        <ul className="nav-links">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
