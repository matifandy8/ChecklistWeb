import { Metadata } from "next";
import LoginForm from "../ui/login/LoginForm";
import "./Login.styles.css";

export const metadata: Metadata = {
    title: "ChecklistWeb - Login",
    description:
        "platform for developers and teams, offering a seamless checklist management experience.",
    openGraph: {
        type: "website",
        url: "https://localhost:3000",
        title: "ChecklistWeb - Login",
        description:
            "platform for developers and teams, offering a seamless checklist management experience.",
        images: [
            {
                url: "https://localhost:3000/logo.png",
                width: 800,
                height: 600,
                alt: "ChecklistWeb - Login",
            },
        ],
    },
}
export default function Login() {
    return (
        <div className="Login">
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
}