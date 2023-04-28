import React from "react";
import "../../assets/style/info.scss"

const Info = () => {

    return (
        <div className="info">
            <h1 className="title">Welcome to Simple House</h1>
            <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download,
                edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
            <div className="categories">
                <button className="pizza">Pizza</button>
                <button className="salad">Salad</button>
                <button className="noodle">Noodle</button>
            </div>
        </div>
    )
}

export default Info