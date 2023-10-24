import Link from "next/link";
import "./Home.styles.css";
import Image from "next/image";
import checkIcon from "/public/check-square.png";

export default function Home() {
  return (
    <main>
      <section className="hero__section">
        <div className="hero__container">
          <div className="hero__content">
            <h1>
              <div className="title-inner">
                Checklist
                <div className="badge">
                  <div className="badge-inner">
                    <div className="badge-text">Excellence</div>
                  </div>
                </div>{" "}
              </div>
              <span>for Dev Success</span>
            </h1>
            <h2>
              ChecklistWeb is the ultimate platform for developers and teams,
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
          <h3 className="features__title">Features</h3>
          <div className="feature__content">
            <div className="feature__item dialog">
              <div className="feature__icon avatar">
                <Image
                  src={checkIcon}
                  alt="Create Checklist Icon"
                  width={30}
                  height={30}
                />
              </div>
              <p>
                Easily create and tailor checklists to perfectly fit your unique
                workflow.
              </p>
            </div>
            <div className="feature__item dialog">
              <div className="feature__icon avatar">
                <Image
                  src={checkIcon}
                  alt="Accelerate Icon"
                  width={30}
                  height={30}
                />
              </div>
              <p>
                Speed up your development projects and achieve your goals with
                efficiency.
              </p>
            </div>
            <div className="feature__item dialog">
              <div className="feature__icon avatar">
                <Image
                  src={checkIcon}
                  alt="Never Miss Icon"
                  width={30}
                  height={30}
                />
              </div>
              <p>
                Say goodbye to missed steps in your development process with
                we&apos;ve got you covered.
              </p>
            </div>
            <div className="feature__item dialog">
              <div className="feature__icon avatar">
                <Image
                  src={checkIcon}
                  alt="Organize Icon"
                  width={30}
                  height={30}
                />
              </div>
              <p>
                Organize and categorize your tasks for improved clarity and
                productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="waitlist">
        <div className="waitlist__container">
          <h3 className="waitlist__title">Waitlist</h3>
          <p>
            Join our waitlist to stay up-to-date with our latest news and
            announcements.
          </p>

          <input type="checkbox" id="modal" />
          <label htmlFor="modal" className="nb-button rounded green">
            Join Waitlist
          </label>
          <label htmlFor="modal" className="modal-background"></label>
          <div className="modal dialog">
            <div className="modal-header">
              <h3> Join our waitlist </h3>
              <label htmlFor="modal" className="close">
                X
              </label>
            </div>
            <p> Thank you for your interest! We&apos;ll be in touch soon. </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="nb-input default"
            />
            <button className="nb-button orange rounded">Join Waitlist</button>
          </div>
        </div>
      </section>
    </main>
  );
}
