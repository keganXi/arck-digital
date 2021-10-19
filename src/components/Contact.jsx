// React imports
import React, { Component } from "react";


class Contact extends Component{
    render(){
        return(
            <div className="sm:text-center">
                <div className="font-bold text-primary text-md sm:text-lg mb-4">
                    <h1>Ready to take your<br></br>business to the next level</h1>
                </div>
                
                <div>
                    <button className="rounded-lg bg-primary py-3 px-6 text-white font-semibold hover:bg-primary-hover duration-300">Let's get to work</button>
                </div>
            </div>
        );
    }
}


export default Contact;