import { createContext, useState } from "react";

const imagesPath = "/static/images/items/";

const initItems = [
    {
        id: 1,
        name: "Rose Creamchese",
        price: 1.99,
        imgSrc: `${imagesPath}m1.png`,
        desc: `Macarons with rose creamchese`
    },
    {
        id: 2,
        name: "Passion Fruit",
        price: 1.99,
        imgSrc: `${imagesPath}m2.png`,
        desc: `Macarons with passion fruit`
    },
    {
        id: 3,
        name: "Blueberry Creamchese",
        price: 1.99,
        imgSrc: `${imagesPath}m3.png`,
        desc: `Macarons with blueberry creamchese`
    },
    {
        id: 4,
        name: "Matcha",
        price: 1.99,
        imgSrc: `${imagesPath}m4.png`,
        desc: `Macarons with matcha`
    },
    {
        id: 5,
        name: "Lavender",
        price: 1.99,
        imgSrc: `${imagesPath}m5.png`,
        desc: `Macarons with lavender`
    },
    {
        id: 6,
        name: "Peanut Butter",
        price: 1.99,
        imgSrc: `${imagesPath}m6.png`,
        desc: `Macarons with peanut butter`
    },
    {
        id: 7,
        name: "Black Sesame",
        price: 1.99,
        imgSrc: `${imagesPath}m7.png`,
        desc: `Macarons with black sesame`
    },
    {
        id: 8,
        name: "Vanilla",
        price: 1.99,
        imgSrc: `${imagesPath}m8.png`,
        desc: `Macarons with vanilla`
    },
    {
        id: 9,
        name: "Strawberry Creamchese",
        price: 1.99,
        imgSrc: `${imagesPath}m9.png`,
        desc: `Macarons with strawberry creamchese`
    }
];

export const ShopContext = createContext();

export const ShopProvider = props => {
    const [items, setItems] = useState(initItems);
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalAmounts, setTotalAmounts] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const checkProduct = id => {
        return cart.some(item => item.id === id);
    };

    const addToCart = selectedItem => {
        if (checkProduct(selectedItem.id)) {
            console.log("Found same item in cart!");
            let index = cart.findIndex(x => x.id == selectedItem.id);
            cart[index].quantity =
                Number(cart[index].quantity) + Number(selectedItem.quantity);
            setCart(cart);
        } else {
            cart.push(selectedItem);
        }

        setCart(cart);
        setQuantity(selectedItem.quantity);
        sumTotalItems(cart);
        sumTotalAmounts(cart);
    };

    const removeFromCart = id => {
        let index = cart.findIndex(x => x.id == id);
        cart.splice(index, 1);
        setCart(cart);
        sumTotalAmounts(cart);
        sumTotalItems(cart);
    };

    const sumTotalItems = () => {
        let total = 0;
        total = cart.length;
        setTotalItems(total);
    };

    const sumTotalAmounts = () => {
        let total = 0;
        for (var i = 0; i < cart.length; i++) {
            total += cart[i].price * parseInt(cart[i].quantity);
        }
        setTotalAmounts(
            Number(Math.round(parseFloat(total + "e" + 2)) + "e-" + 2)
        );
    };

    const updateQuantity = qty => {
        setQuantity(Math.floor(qty));
    };

    return (
        <ShopContext.Provider
            value={{
                items,
                quantity,
                cart,
                totalItems,
                totalAmounts,
                addToCart,
                removeFromCart,
                updateQuantity
            }}
        >
            {props.children}
        </ShopContext.Provider>
    );
};
