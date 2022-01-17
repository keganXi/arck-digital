// React imports.
import React, { Component } from "react";

// Image imports.
import InsightAndReqImage from "../images/insight-and-requirements.jpg";


class InsightAndRequirements extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Insight and requirements",
            description: "Upon our initial consultation we gain insight into the client's business needs and gather the requirements to help us scope out the project so we can execute it in the right way.",
        };
    }

    render(){
        return(
            <div>
                <div className="sm:flex">
                    <div className="w-full justify-center flex sm:hidden pb-7">
                        <div>
                            <img src={InsightAndReqImage} width="500px" height="500px" alt="insight and requirements" />
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
                                <h1 className="text-lg-x text-p-blue font-bold text-opacity-25">1</h1>
                            </div>  
                        </div>
                    </div>

                    <div className="w-full justify-center sm:flex sm:pt-0 hidden">
                        <div>
                            <img src={InsightAndReqImage} width="500px" height="500px" alt="insight and requirements" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default InsightAndRequirements;
