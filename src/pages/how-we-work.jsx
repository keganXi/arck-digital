// React imports.
import * as React from "react";

// Component imports.
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InsightAndRequirements from "../components/InsightAndRequirements";
import DesignAndPrototyping from "../components/DesignAndPrototyping";
import DevelopmentAndTesting from "../components/DevelopmentAndTesting";
import Deployment from "../components/Deployment";
import Contact from "../components/Contact";
import TabHeader from "../components/TabHeader";


const HowWeWork = () => {
    return(
        <div className="text-primary">

            <TabHeader subTitle={"| How we work"}/>

            <Navbar />

            <main className="md:my-10 md:px-12 mx-auto p-6">
                <header className="pb-10 sm:pb-24">
                    <h1 className="text-md md:text-lg font-semibold sm:text-center">How We Work?</h1>
                </header>

                <section>
                    <div>
                        <InsightAndRequirements />
                    </div>

                    <div className="pt-16 sm:pt-36">
                        <DesignAndPrototyping />
                    </div>

                    <div className="pt-16 sm:pt-36">
                        <DevelopmentAndTesting />
                    </div>

                    <div className="pt-16 sm:pt-36">
                        <Deployment />
                    </div>

                    <div className="pt-16 sm:pt-48">
                        <Contact />
                    </div>

                </section>
            </main>            

            <Footer />

        </div>
    );
}


export default HowWeWork;
