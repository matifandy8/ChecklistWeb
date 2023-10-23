import React from "react";
import "./styles.css";
import Image from "next/image";
import githubIcon from "/public/github.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>© 2023 ChecklistWeb.</p>
        <p>
          <a
            href="https://github.com/ChecklistWeb/ChecklistWeb"
            target="_blank"
          >
            <Image src={githubIcon} alt="GitHub Icon" width={30} height={30} />
          </a>
        </p>
      </div>
    </footer>
  );
}
