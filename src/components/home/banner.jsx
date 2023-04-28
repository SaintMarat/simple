import React from "react";
import "../../assets/style/banner.scss"
import Nkar from "../../assets/image/01.jpg"


const Banner = () => {


    return (
        <div className="banner">
            <img src={Nkar} alt="" className="nkar" />
            <div className="text">
                <p className="logo">Simple House</p>
                <p className="logo_small">new restaurant template</p>
            </div>
            <div className="pages">
                <a href="/Home">Home</a>
                <a href="About">About</a>
                <a href="Contact">Contact</a>
            </div>



        </div>
    )

}
export default Banner