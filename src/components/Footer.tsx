import { Fragment } from "react"
import footerBg from "../assets/images/footer-bg-1-1.png"
import logo from "../assets/images/logo-light.png"
const Footer = () => {
    let date = new Date().getFullYear()
    return (
        <Fragment>
            <footer style={
                {
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundImage: `url(${footerBg})`,
                    backgroundPosition: "top center",
                    backgroundBlendMode: "luminosity",

                }
            } className="bg-custom-dark-primary pt-[90px] pb-[100px]">
                <div className="container-fluid">

                </div>
            </footer>
            {/* Bottom fooer */}
            <div className="bg-custom-dark-secondary py-[22px]">
                <div className="container-fluid">
                    <p className="text-[15px] text-center text-[#a2a2b1]">Copyright © {date} All Rights Reserved</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer