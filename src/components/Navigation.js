import React from "react"
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <>
            <div className="navigation-container">
                <div className="logged-in">
                    <button className="login nav-btn ">Zaloguj</button>
                    <button className="sign-in nav-btn ">Załóż konto</button>
                </div>
                <nav className="navigation-content">
                    <button className="button-nav"/>
                    <ul>
                        <li className="nav-item" aria-current="page"><Link className='text-reset'
                                                                                  to='main'>Start</Link></li>
                        <li className="nav-item"><Link className='text-reset' to='#'>O co
                            chodzi?</Link></li>
                        <li className="nav-item"><Link className='text-reset' to='#'>O
                            nas</Link></li>
                        <li className="nav-item"><Link className='text-reset' to='#'>Fundacja
                            i organizacje</Link></li>
                        <li className="nav-item"><Link className='text-reset'
                                                                       to='#'>Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navigation;
