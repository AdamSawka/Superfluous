import React from "react"
import HomeHeroImage from "../assets/Home-Hero-Image.jpg"
import Decoration from "../assets/Decoration.svg"
import HomeInfo from "./HomeInfo"
import {Link} from "react-router-dom"
import FourSteps from "./FourSteps";
import AboutUs from "./AboutUs";
import Help from "./Help";

function HomeMain() {

    return (
        <>
            <div className="home-main">
                <img className="main-img" src={HomeHeroImage} alt="main-img"/>
                <div className="main-content  ">
                    <h1 className="main-content-title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="decoration-box">
                        <img className="decoration" src={Decoration} alt="decoration"/>
                    </div>
                    <div className="main-buttons">
                        <div className="main-content-button"><Link className="btn-text" to="/login">Oddaj rzeczy</Link></div>
                        <div className="main-content-button"><Link className="btn-text" to="/login">Zorganizuj zbiórkę</Link></div>
                    </div>

                </div>
            </div>
            <HomeInfo/>
            <FourSteps/>
            <AboutUs/>
            <Help/>
        </>
    )
}

export default HomeMain