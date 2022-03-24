import React from "react"
import {Link} from "react-router-dom";
import menuIcon from "../assets/menu-button.png"

function Navigation() {
    return (
        <>
            <div className="navigation-container">
                <div className="logged-in">
                    <button className="login nav-btn "><Link className="txt-login" to="/login">Zaloguj</Link></button>
                    <button className="sign-in nav-btn "><Link className="txt-login" to="/sign-in">Załóż konto</Link>
                    </button>
                </div>
                <button className="button-nav"><img src={menuIcon} alt="menu button"/></button>
                <nav className="navigation-content">
                    <ul>
                        <Link className=' nav-item text-reset' to='main'>Start</Link>
                        <Link className=' nav-item text-reset' to='#'>O co chodzi?</Link>
                        <Link className=' nav-item text-reset' to='#'>O nas</Link>
                        <Link className=' nav-item text-reset' to='#'>Fundacja i organizacje</Link>
                        <Link className=' nav-item text-reset' to='#'>Kontakt</Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navigation;
