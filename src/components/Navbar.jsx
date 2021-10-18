// React imports.
import React, { Component } from "react";

// Gatsby imports.

// Image imports.
import ShipIcon from "../images/ship.svg";
import ShipWhiteIcon from "../images/ship-white.svg";
import MenuIcon from "../images/menu.svg";
import CloseIcon from "../images/close(1).svg";


class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            onMenu: false
        };

        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
    }

    onOpen(){
        this.setState({ onMenu: true });
    }

    onClose(){
        this.setState({ onMenu: false });
    }

    render(){
        return(
            <div>

                { this.state.onMenu? sidebar({onClose: this.onClose}) : false }
                

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
                            
                            <div className="w-full">
                                <div className="text-right mt-3">
                                    <button onClick={() => this.onOpen()}>
                                        <img src={MenuIcon} alt="menu" className="inline-block sm:hidden" height="20px" width="20px" />
                                    </button>
                                    <div className="sm:block hidden">
                                        <span className="mr-6 font-semibold text-primary text-x-sm cursor-pointer">Case Study</span>
                                        <span className="text-primary font-semibold text-x-sm cursor-pointer">Let's talk</span>
                                    </div>
                                </div>
                            </div>  
                        </div>   
                    </div>
                </navbar>
            </div>
        );
    }
}


const sidebar = (props) => {
    return(
        <div className="bg-primary w-full h-full z-50 fixed">
            <div className="text-white p-6">
                <div className="flex">
                    <div className="w-full">
                        <div className="flex">
                            <img src={ShipWhiteIcon} width="28px" height="28px" className="mr-3" alt="arck digital icon"/>
                            <h1 className="text-white">
                                <span className="font-semibold text-md">Arck.</span><span className="text-x-sm">digital</span>
                            </h1>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="text-right mt-3">
                            <button onClick={() => props.onClose()}>
                                <img src={CloseIcon} alt="close menu" className="inline-block sm:hidden" height="20px" width="20px" />
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>

            <div className="p-7">
                <div className="text-center text-white text-sembold text-sm-l">
                    <div className="m-4">
                        <h1>Let's talk</h1>
                    </div>
                    
                    <div className="m-4">
                        <h1>How we work</h1>
                    </div>

                    <div className="m-4">
                        <h1>Services</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;