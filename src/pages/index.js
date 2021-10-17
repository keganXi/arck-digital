// React imports.
import * as React from "react"

// Component imports.
import Navbar from "../components/Navbar";
import Intro from "../components/Intro.jsx";
import About from "../components/About.jsx";


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      
      <Navbar />

      <section>

        <div className="my-10 container mx-auto p-6">
          <Intro /> 
        </div>

        <div className="mt-40">
          <About />
        </div>
        

      </section>

    </main>
  )
}

export default IndexPage
