// React imports.
import React, { Component } from "react";


class About extends Component{
    render(){
        return(
            <div>
                <div className="w-full bg-primary text-white">
                    <div className="md:px-12 mx-auto p-6">
                        <div className="my-10">
                            <div className="pb-4">
                                <h1 className="text-lg font-bold">About</h1>
                            </div>
                            
                            <div className="md:flex">
                                <div className="w-full">
                                    <div className="relative">
                                        <div className="py-3">
                                            <p className="font-semibold text-md">We don't just develop</p>
                                        </div>
                                        <div className="w-10/12">
                                            <p className="text-sm-l">
                                                Here at Arck digital what we do is plan and create digital solutions and strategize around your business and customer base giving you the best possible chance of succeeding.
                                            </p>
                                        </div>

                                        <div className="absolute top-3 left-4 ">
                                            <h1 className="text-9xl text-p-blue font-bold text-opacity-25">1</h1>
                                        </div>                                        
                                    </div>
                                </div>

                                <div className="w-full mt-7 md:mt-0">
                                    <div className="relative">
                                        <div className="py-3">
                                            <p className="font-semibold text-md">Your success is our success</p>
                                        </div>
                                        <div className="w-10/12">
                                            <p className="text-sm-l">
                                                We believe that our clients happiness and goals are just as important as our's that's why we strive to deliver quality and scalable applications.
                                            </p>
                                        </div>

                                        <div className="absolute top-3 left-4">
                                            <h1 className="text-9xl text-p-blue font-bold text-opacity-25">2</h1>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
