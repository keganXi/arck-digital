// React imports.
import React, { Component } from "react";

// Image imports.
import DeploymentImage from "../images/deployment.jpg";


class Deployment extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Deployment",
            description: "The day we've been waiting for! before deployment we make sure that you are satisfied with the end product and all your requirements have been met, it's important that all our boxes are checked but even more important that your's are.",
        };
    }

    render(){
        return(
            <div>
                <div className="sm:flex">
                    <div className="w-full flex pb-7 sm:pb-0">
                        <div className="flex">
                            <img src={DeploymentImage} width="335px" height="335px" alt="deployment image" />
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
                                <h1 className="text-lg-x text-p-blue font-bold text-opacity-25">4</h1>
                            </div>  
                        </div>                        
                    </div>
                </div>
            </div>
        );
    }
}


export default Deployment;
