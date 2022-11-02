import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setcartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, settotalQuantities] = useState();
    const [qty, setqty] = useState(1);

    return (
        <Context.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty
             }}>
            {children}
        </Context.Provider>
    )

}