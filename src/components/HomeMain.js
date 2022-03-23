import React from "react"
import HomeHeroImage from "../assets/Home-Hero-Image.jpg"
import Decoration from "../assets/Decoration.svg"
import HomeInfo from "./HomeInfo";

function HomeMain() {

    return (
        <>
            <div className="home-main">
                <img className="main-img" src={HomeHeroImage} alt="main-img"/>
                <div className="main-content  ">
                    <h1 className="main-content-title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img className="decoration" src={Decoration} alt="decoration"/>
                    <button className="main-content-button">Oddaj rzeczy</button>
                    <button className="main-content-button">Zorganizuj zbiórkę</button>
                </div>
            </div>
            <HomeInfo/>
        </>
    )
}

export default HomeMain