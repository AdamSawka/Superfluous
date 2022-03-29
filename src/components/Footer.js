import React from "react";
import Facebook from "../assets/Facebook.svg"
import Instagram from "../assets/Instagram.svg"
function Footer(){

    return(
        <>
            <section className="footer">
                <p className="footer-copyright">
                    Copyright by Coders Lab
                </p>
                <div className="footer-social">
                    <img src={Facebook} alt="facebook"/>
                    <img src={Instagram} alt="instagram"/>
                </div>

            </section>
        </>
    )
}
export default Footer