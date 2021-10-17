// React imports.
import * as React from "react"

// Component imports.
import Navbar from "../components/Navbar";

// Images imports.
import EcommerceBanner from "../images/e-commerce.svg";
import AnalyticsBanner from "../images/custom-icon.svg";
import PaymentBanner from "../images/payment-solution.svg";
import TwitterIcon from "../images/twitter.svg";
import InstagramIcon from "../images/instagram.svg";
import LinkedinIcon from "../images/linkedin-in.svg";


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      
      <Navbar />

      <section className="container mx-auto p-6">

        <div className="my-10">
          <div className="flex">
            <div className="w-full">
              <div className="pt-14">
                <h1 className="font-bold text-primary text-lg">Strategize Build Deploy</h1>
                <div className="pt-1">
                  <p className="text-sm text-gray-400 font-semibold">Take your business to the next level with our innovative and tailormade solutions.</p>
                </div>

                <div className="pt-7">
                  <button className="rounded-lg bg-primary py-3 px-6 text-white font-semibold hover:bg-primary-hover duration-300">Let's talk</button>
                  <button className="rounded-lg bg-primary py-3 px-6 text-white font-semibold mx-4 hover:bg-primary-hover duration-300">How we work</button>
                </div>

                <div className="pt-9">
                  <div className="flex">
                    <div>
                      <div className="rounded-full shadow-md p-3">
                        <img src={TwitterIcon} height="16px" width="16px" alt="twitter icon"/>
                      </div>
                    </div>

                    <div className="mx-4">
                      <div className="rounded-full shadow-md p-3">
                        <img src={InstagramIcon} height="16px" width="16px" alt="instagram icon"/>
                      </div>
                    </div>

                    <div>
                      <div className="rounded-full shadow-md p-3">
                        <img src={LinkedinIcon} height="16px" width="16px" alt="linkedin icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative">
                <div>
                  <div className="flex justify-center">
                    <img src={AnalyticsBanner} height="280px" width="370px" alt="analytics banner" />
                  </div>
                </div>

                <div className="absolute top-0 z-10 top-28 right-0">
                  <div className="flex justify-center">
                    <img src={PaymentBanner} height="280px" width="370px" alt="payment solutions banner" />
                  </div>
                </div>

                <div className="absolute top-0 z-10 top-48 left-0">
                  <div className="flex justify-center">
                    <img src={EcommerceBanner} height="280px" width="370px" alt="e-commerce solutions banner" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </section>

    </main>
  )
}

export default IndexPage
