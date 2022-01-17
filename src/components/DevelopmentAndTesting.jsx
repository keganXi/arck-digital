// React imports.
import React, { Component } from "react";

// Image imports.
import DevelopmentAndTestingImage from "../images/development-and-testing.png";


class DevelopmentAndTesting extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Development and testing",
            description: "Development is what we do best, After the design and prototyping process we start to develop the application using best practices with modern technologies putting it through rigorous testing to produce an amazing product.",
        };
    }

    render(){
        return(
            <div>
                <div className="sm:flex">
                    <div className="w-full justify-center flex sm:hidden pb-7">
                        <div>
                            <img src={DevelopmentAndTestingImage} width="230px" height="230px" alt="development and testing" />
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
                                <h1 className="text-lg-x text-p-blue font-bold text-opacity-25">3</h1>
                            </div>  
                        </div>
                    </div>

                    <div className="w-full justify-center sm:flex sm:pt-0 hidden">
                        <div>
                            <img src={DevelopmentAndTestingImage} width="250px" height="250px" alt="development and testing" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default DevelopmentAndTesting;
