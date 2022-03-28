import React from "react";
import Decoration from "../assets/Decoration.svg"

function Help() {

    return (
        <>
            <section className="help">
                <div className="help-container">
                    <div className="help-content">
                        <h3>Komu pomagamy?</h3>
                        <div className="help-decoration"><img src={Decoration} alt="decoration"/></div>
                        <div className="help-buttons">
                            <button className="help-button">Fundacjom</button>
                            <button className="help-button">Organizacjom pozarządowym</button>
                            <button className="help-button">Lokalnym zbiórkom</button>
                        </div>
                        <p className="help-description">
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                            sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                        <div className="help-carousel">


                        </div>
                    </div>


                </div>

            </section>
        </>
    )
}

export default Help