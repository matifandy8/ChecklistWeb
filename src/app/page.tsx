import Link from "next/link";
import "./Home.styles.css";

export default function Home() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Welcome to DevChecklists</h1>
            <h2>
              DevChecklists is the ultimate platform for developers and teams,
              offering a seamless checklist management experience. Whether
              you&apos;re working on a solo project or collaborating with a
              team, our feature-rich platform empowers
            </h2>
            <button className="nb-button orange rounded">
              <Link href="/demo">Get Started</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features__container">
          <div className="feature__content">
            <h2>Features</h2>
            <ul>
              <li>Manage your checklists</li>
              <li>Track your progress</li>
              <li>Create your own checklist</li>
              <li>Share your checklists</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
