import React from "react";
import "./Home.css"
import Social from "./Social";
import Data from "./Data";
import jizzy from "../../../src/assets/jizzy-image.png"
import ScrollDown from "./ScrollDown";



const Home = () => {
    return <>
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <Data />
                    <div className="home__img">
                        <img src={jizzy} alt="icon for jizzy" />
                    </div>
                    <ScrollDown />
                </div>
            </div>
        </section>
    </>
}


export default Home;