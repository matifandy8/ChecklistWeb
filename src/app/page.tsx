import Link from "next/link";
import "./Home.styles.css";
import Image from "next/image";
import checkIcon from "/public/check-square.png";
import WaitlistForm from "@/components/WaitlistForm/WaitlistForm";

export default function Home() {
  return (
    <>
      <section className="hero__section">
        <div className="hero__container">
          <div className="hero__content animated">
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
              <Link href="/dashboard" className="nb-button orange rounded">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features__container">
          <h3 className="features__title">Features</h3>
          <div className="feature__content">
            <div className="feature__item dialog animated">
              <div className="feature__icon avatar bg-green">
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
            <div className="feature__item dialog animated">
              <div className="feature__icon avatar bg-green">
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
            <div className="feature__item dialog animated">
              <div className="feature__icon avatar bg-green">
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
            <div className="feature__item dialog animated">
              <div className="feature__icon avatar bg-green">
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
      <WaitlistForm/>
      </>
  );
}
