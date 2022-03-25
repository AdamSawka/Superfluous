import React from "react";
import Decoration from "../assets/Decoration.svg"
import Icon_1 from "../assets/Icon-1.svg"
import Icon_2 from "../assets/Icon-2.svg"
import Icon_3 from "../assets/Icon-3.svg"
import Icon_4 from "../assets/Icon-4.svg"
import {Link} from "react-router-dom";


function FourSteps (){
    return(
        <>
        <div className="steps-content">
            <div className="steps-title">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="steps-decoration"><img src={Decoration} alt="decoration"/></div>
            </div>
            <div className="steps-elements">
                <div className="steps-element steps-element1"><img src={Icon_1} alt=""/><h3>Wybierz rzeczy</h3><br/><p>ubrania, zabawki, sprzęt i inne</p></div>
                <div className="steps-element steps-element2"><img src={Icon_2} alt=""/><h3>Spakuj je</h3><br/><p>skorzystaj z worków na śmieci</p></div>
                <div className="steps-element steps-element3"><img src={Icon_3} alt=""/><h3>Zdecyduj komu chcesz pomóc</h3><br/><p>wybierz zaufane miejsce</p></div>
                <div className="steps-element steps-element4"><img src={Icon_4} alt=""/><h3>Zamów kuriera</h3><br/><p>kurier przyjedzie w dogodnym terminie</p></div>
            </div>
            <div className="steps-button"><Link className="btn-text" to="/login">Oddaj rzeczy</Link></div>


        </div>

        </>
    )


}
export default FourSteps