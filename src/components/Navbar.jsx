// React imports.
import React, { Component } from "react";
import { Link } from "gatsby"

// Image imports.
import ShipIcon from "../images/ship.svg";
import ShipWhiteIcon from "../images/ship-white.svg";
import MenuIcon from "../images/menu.svg";
import CloseIcon from "../images/close(1).svg";


class Navbar extends Component{
    constructor(props){
        super(props)
        this.state = {
            onMenu: false,
            navbarContent: [
                {
                    ID: 1, 
                    title: "Home",
                    link: "/"
                },

                {
                    ID: 2, 
                    title: "How we work",
                    link: "/how-we-work"
                },

                {
                    ID: 3, 
                    title: "Let's talk",
                    link: "/contact"
                }
            ]
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

        const navbarLinks = data => {
            return(
                <Link to={ data.link } key={data.ID} className="mx-3 lg:mx-6">
                    <span className="text-primary font-semibold text-x-sm cursor-pointer">{ data.title }</span>
                </Link>
            )
        };

        return(
            <div>

                { this.state.onMenu? sidebar({ onClose: this.onClose, data: this.state.navbarContent }) : false }

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
                                    <button onClick={() => this.onOpen()} className="inline-block sm:hidden">
                                        <img src={MenuIcon} alt="menu" height="20px" width="20px" />
                                    </button>
                                    <div className="sm:block hidden">
                                        { this.state.navbarContent.map((item) => navbarLinks(item)) }
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
    const sidebarLinks = data => {
        return(
        <div className="m-4" key={data.ID}>
            <Link to={ data.link }>
                <h1>{ data.title }</h1>
            </Link>
        </div>)
    };

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

            <div>
                <div className="text-center text-white text-sembold text-md">
                    { props.data.map((item) => sidebarLinks(item)) }
                </div>
            </div>
        </div>
    );
}

export default Navbar;