import React from "react";
import { Nav, Footer } from "./Components/index";

const Layout = ({children}) => {
    return(
        <>
        <Nav />
        {children}
        <Footer />
        </>
        
    )
}

export {Layout};