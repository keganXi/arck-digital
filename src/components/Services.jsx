// React imports.
import React, { Component } from "react";


class Services extends Component{
    constructor(props){
        super(props);
        this.state = {
            services: [
                {
                    ID: 1,
                    title: "E-commerce",
                    detail: "We will help you shift your store online with our well developed e-commerce solution making the process as simple as possible."
                },

                {
                    ID: 2,
                    title: "SaaS",
                    detail: "We build stable and scalable SaaS products leveraging the right technology that takes your business to the next level."
                },

                {
                    ID: 3,
                    title: "Tailormade",
                    detail: "Our tailormade software is meant to serve your business the right way. We scope out your business needs and requirements to produce an amazing product."
                }
            ]
        }
    }

    render(){
        return(
            <div className="text-primary">
                <div className="text-center">
                    <h1 className="text-lg font-bold">Services</h1>
                </div>
                
                <div className="md:flex justify-center">
                    { this.state.services.map(item => servicesCards({ item: item })) }
                </div>
            </div>
        );
    }
}


const servicesCards = (props) => {
    return(
        <div className="md:m-10 w-full" key={props.item.ID}>
            <div className="p-4">
                <div className="text-center pb-3">
                    <p className="text-md font-semibold">{ props.item.title }</p>
                </div>

                <div>
                    <p>
                        { props.item.detail }
                    </p>
                </div>
            </div>
        </div>                
    );
}


export default Services;