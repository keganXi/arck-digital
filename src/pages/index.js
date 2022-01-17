// React imports.
import * as React from "react";

// Component imports.
import Navbar from "../components/Navbar";
import Intro from "../components/Intro.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      
      <Navbar />

      <section>

        <div className="md:my-10 md:px-12 mx-auto p-6">
          <Intro /> 
        </div>

        <div className="mt-40">
          <About />
        </div>

        <div className="mt-20 lg:px-12 mx-auto sm:p-6">
          <Services />
        </div>

        <div className="mt-10 md:px-12 mx-auto p-6">
          <Contact />
        </div>

      </section>

      <Footer />

    </main>
  )
}

export default IndexPage
