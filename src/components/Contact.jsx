// React imports
import React, { Component } from "react";
import { Link } from "gatsby";


class Contact extends Component{
    render(){
        return(
            <div className="sm:text-center">
                <div className="font-bold text-primary text-md sm:text-lg mb-4">
                    <h1>Ready to take your<br></br>business to the next level</h1>
                </div>
                
                <div>
                    <Link to="/contact">
                        <button className="rounded-lg bg-primary py-3 px-6 text-white font-semibold hover:bg-primary-hover duration-300">Let's get to work</button>
                    </Link>
                </div>
            </div>
        );
    }
}


export default Contact;
