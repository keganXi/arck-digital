// React imports.
import * as React from "react";

// Component imports.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightAndRequirements from "../components/InsightAndRequirements";


const HowWeWork = () => {
    return(
        <div className="text-primary">

            <Navbar />

            <main className="md:my-10 md:px-12 mx-auto p-6">
                <header className="pb-10 sm:pb-24">
                    <h1 className="text-md md:text-lg font-semibold sm:text-center">How We Work?</h1>
                </header>

                <section>
                    <div>
                        <InsightAndRequirements />
                    </div>
                </section>
            </main>            

            <Footer />

        </div>
    );
}


export default HowWeWork;