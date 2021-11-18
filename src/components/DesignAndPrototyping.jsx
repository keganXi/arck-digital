// React imports.
import React, { Component } from "react";

// Image imports.
import ConstructImage from "../images/construct.png";


class DesignAndPrototyping extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Design and prototyping",
            description: "After we collect all the information we need we begin the design and prototyping processs, we create a prototype giving you an idea of what the UI/UX will look like and what you can expect.",
        };
    }

    render(){
        return(
            <div>
                <div className="sm:flex">
                    <div className="w-full flex pb-7 sm:pb-0">
                        <div className="flex">
                            <img src={ConstructImage} width="335px" height="335px" alt="design and prototype image" />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="relative">
                            <div className="pb-2">
                                <h2 className="text-sm-l sm:text-md font-semibold">{ this.state.title }</h2>
                            </div>
                            <div>
                                <p className="text-sm sm:text-sm-l">{ this.state.description }</p>
                            </div>

                            <div className="absolute top-0 left-3">
                                <h1 className="text-lg-x text-p-blue font-bold text-opacity-25">2</h1>
                            </div>  
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}


export default DesignAndPrototyping;
