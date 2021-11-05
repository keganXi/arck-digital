// React imports.
import * as React from "react"
import { Link } from "gatsby";

// Image imports.
import ShipWhiteIcon from "../images/ship-white.svg";
import TwitterIcon from "../images/twitter.svg";
import InstagramIcon from "../images/instagram.svg";
import LinkedinIcon from "../images/linkedin-in.svg";


const Footer = () => {
    return(
        <footer className="w-full bottom-0 bg-primary lg:px-12 mx-auto p-6 mt-28 text-center text-white">

            <div className="py-10 text-sm font-semibold">
                <p>Socials</p>
                <div className="flex justify-center pt-3">
                    <div>
                        <a href="https://twitter.com/ArckDigital" target="_blank">
                            <div className="rounded-full shadow-md p-3 bg-white">
                                <img src={TwitterIcon} height="16px" width="16px" alt="twitter icon"/>
                            </div>
                        </a>
                    </div>

                    <div className="mx-4">
                        <a href="https://www.instagram.com/arck_digital/" target="_blank">
                            <div className="rounded-full shadow-md p-3 bg-white">
                                <img src={InstagramIcon} height="16px" width="16px" alt="instagram icon"/>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/company/arck-digital" target="_blank">
                            <div className="rounded-full shadow-md p-3 bg-white">
                                <img src={LinkedinIcon} height="16px" width="16px" alt="linkedin icon"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <img src={ShipWhiteIcon} width="24px" height="24px" alt="arck digital icon" className="mr-3" />
                <h1 className="text-sm">
                    <span className="font-semibold">Arck.</span>
                    <span className="text-x-sm">digital</span>
                </h1>
            </div>
        </footer>
    );
}


export default Footer;
