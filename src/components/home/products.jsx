import React, { useState } from "react";
import "../../assets/style/products.scss"
import Menu1 from "../../assets/image/menu1.jpg"
import Menu2 from "../../assets/image/02.jpg"
import Menu3 from "../../assets/image/03.jpg"
import Menu4 from "../../assets/image/04.jpg"
import Menu5 from "../../assets/image/05.jpg"
import Menu6 from "../../assets/image/06.jpg"
import Menu7 from "../../assets/image/07.jpg"
import Menu8 from "../../assets/image/08.jpg"




const Menu = () => {
    const [items] = useState({
        products: [
            {
                photo: { Menu1 },
                name: 'Fusce dictum finibus',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$45 / $55"

            },
            {
                photo: { Menu2 },
                name: 'Aliquam sagittis',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$65 / $70"
            },
            {
                photo: { Menu3 },
                name: 'Sed varius turpis',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$30.50"
            },
            {
                photo: { Menu4 },
                name: 'Aliquam sagittis',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$25.50"
            },
            {
                photo: { Menu5 },
                name: 'Maecenas eget justo',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$80.25"
            },
            {
                photo: { Menu6 },
                name: 'Quisque et felis eros',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$20 / $40 / $60"
            },
            {
                photo: { Menu7 },
                name: 'Sed ultricies dui',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$94"
            },
            {
                photo: { Menu8 },
                name: 'Donec porta consequat',
                description: ' Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
                price: "$15"
            }
        ]
    });

    return (
        <div className="food">
            {items.products.map((item) => {
                return <div className='P-flex-box'  >


                    <img src={Menu7} alt="" />
                    <p className="title">{item.name}</p>
                    <p className="description">{item.description}</p>
                    <p className="price">{item.price}</p>
                </div>
            })}
        </div>


    )


}

export default Menu



