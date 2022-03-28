import React from "react"
import Decoration from "../assets/Decoration.svg"
import Signature from "../assets/Signature.svg"

function AboutUs() {

    return (
        <>
            <section className="aboutUs">
            <div className="about-container">
                <div className="about-description">
                    <h2>O nas</h2>
                    <div className="about-decoration"><img src={Decoration} alt="decoration"/></div>
                    <p className="about-paragraph">Nori grape silver beet broccoli kombu beet greens fava bean potato
                        quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className="about-signature"><img src={Signature} alt="signature"/></div>
                </div>
                <div className="about-img"/>

            </div>
            </section>
        </>
    )
}

export default AboutUs