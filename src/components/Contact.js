import React from "react"
import Decoration from "../assets/Decoration.svg"
import Background from "../assets/Background-Contact-Form.jpg"

function Contact() {

    return (
        <>
            <section className="contact-container">
                <img src={Background} alt="clothes"/>
                <div className="contact-content">
                    <h3 className="contact-title">Skontaktuj się z nami</h3>
                    <div className="contact-decoration"><img src={Decoration} alt="decoration"/></div>
                    <form className="contact-form" action="/" method="post">
                        <div className="contact-name">
                            <label htmlFor="">Wpisz swoje imię</label>
                            <input type="text" placeholder="Krzysztof"/>
                        </div>
                        <div className="contact-mail">
                            <label htmlFor="">Wpisz swój email</label>
                            <input type="text" placeholder="abc@xyz.pl"/>
                        </div>
                        <div className="contact-textarea">
                        <label htmlFor="">Wpisz swoją wiadomość</label>
                        <textarea name="message" id="message" cols="50" rows="10" placeholder="Treść wiadomości"/>
                        <button>Wyślij</button>
                        </div>
                    </form>

                </div>


            </section>

        </>
    )
}

export default Contact