// React imports
import React, { Component } from "react";

// Component imports.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";


class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar />

                <main className="md:my-10 justify-center flex">
                    <div className="sm:w-3/5 lg:w-2/5 p-6 sm:p-0">
                        <header className="mb-8">
                            <h1 className="font-bold text-primary text-md-sm sm:text-lg ">Let's talk</h1>
                            <p className="text-gray-400">Fill in the form below and we will get back to you as soon as possible : )</p>
                        </header>

                        <section className="text-primary font-semibold text-sm sm:text-sm-l">
                            <form>
                                <label htmlFor="name">Name*</label>
                                <div className="pt-2">
                                    <input type="text" className="w-full border border-gray-400 p-2 rounded-lg" id="name" name="name" />
                                </div>

                                <div className="sm:flex py-7">
                                    <div className="w-full sm:mr-3">
                                        <label htmlFor="email">Email*</label>
                                        <div className="pt-2">
                                            <input type="text" className="w-full border border-gray-400 p-2 rounded-lg" id="email" name="email"/>
                                        </div>
                                    </div>

                                    <div className="w-full sm:ml-3 pt-7 sm:p-0">
                                        <label htmlFor="phone">Phone</label>
                                        <div className="pt-2">
                                            <input type="text" className="w-full border border-gray-400 p-2 rounded-lg" id="phone" name="phone"/>
                                        </div>
                                    </div>
                                </div>

                                <label htmlFor="description">How can we help you?</label>
                                <div className="pt-2">
                                    <textarea type="text" className="h-28 w-full border border-gray-400 p-2 rounded-lg" id="description" name="description"/>
                                </div>

                                <div className="pt-7">
                                    <button className="rounded-lg bg-primary py-2 text-white hover:bg-primary-hover duration-300 w-full sm:w-28">Send</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </main>

                <Footer />
                
            </div>
        );
    }
}


export default Contact;