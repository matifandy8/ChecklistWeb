"use client"

import Link from "next/link"
import ButtonLogout from "../ButtonLogout"
import "./MobileNavbar.styles.css"
export default function MobileNavbar(session: any) {

    return (
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                 <li className="nav-item nb-button orange rounded">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
                <div>
                    <ButtonLogout />
                </div>
                <div className="avatar bg-pale-red">
                    <img className="avatar-img" src={session?.user?.image || '/default-avatar.png'} alt="Avatar" />
                </div>
            </ul>
        </div>
    )
}