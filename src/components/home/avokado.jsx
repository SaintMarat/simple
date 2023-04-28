import React from "react";
import "../../assets/style/avokado.scss"
import Avo from "../../assets/image/avokado.jpg"

const Avokado = () => {
    return (
        <div className="last">
            <div className="P-photo">
                <img src={Avo} alt="" />
            </div>
            <div className="p-info">
                <h1>Maecenas nulla neque</h1>
                <p>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited.
                    You will need to talk to us for additional permissions about our templates. Thank you.</p>
            </div>

        </div>
    )
}

export default Avokado
