// React imports.
import React, { Component } from "react";

// Gatsby imports.

// Image imports.
import ShipIcon from "../images/ship.svg";


class Navbar extends Component{
    render(){
        return(
            <navbar className="bg-white w-full">
                <div className="md:px-12 mx-auto p-6">
                    <div className="inline-block flex">
                        <div className="w-full">
                            <div className="flex">
                                <img src={ShipIcon} width="28px" height="28px" className="mr-3" alt="arck digital icon"/>
                                <h1>
                                    <span className="font-semibold text-primary text-md">Arck.</span><span className="text-x-sm">digital</span>
                                </h1>
                            </div>
                        </div> 
                        
                        <div className="w-full sm:block hidden">
                            <div className="text-right">
                                <span className="mr-6 font-semibold text-primary text-x-sm cursor-pointer">Case Study</span>
                                <span className="text-primary font-semibold text-x-sm cursor-pointer">Let's talk</span>
                            </div>
                        </div>  
                    </div>   
                </div>
            </navbar>
        );
    }
}

export default Navbar;