import React from "react";

function Footer() {
    return (
        <div className="Footer">
            <div className="section-padding">
                <div className="Footer-links">
                    <div className="Footer-link-div">
                        <h4>Recomended</h4>

                        <a href="realme C75">
                            <p>realme C75</p>
                        </a>

                        <a href="realme 13+ 5G">
                            <p>realme 13+ 5G</p>
                        </a>

                        <a href="realme Note 60">
                            <p>realme Note 60</p>
                        </a>

                        <a href="realme C61">
                            <p>realme C61</p>
                        </a>


                        <a href="realme C65">
                            <p>realme C65</p>
                        </a>

                        <a href="realme 12">
                            <p>realme 12</p>
                        </a>

                        <a href="realme 12+ 5G">
                            <p>realme 12+ 5G</p>
                        </a>

                    </div>

                    <div className="Footer-link-div">
                        <h4>Support</h4>

                        <a href="FAQ">
                            <p>FAQ</p>
                        </a>

                        <a href="Troubleshooting">
                            <p>Troubleshooting</p>
                        </a>
                    </div>

                    <div className="Footer-link-div">
                        <h4>About realme</h4>

                        <a href="Our Brand">
                            <p>Our Brand</p>
                        </a>

                        <a href="Newsroom">
                            <p>Newsroom</p>
                        </a>
                    </div>

                    <div className="Footer-link-div">
                        <h4>Contact Us</h4>

                        <a href="Whatsapp">
                            <p>Whatsapp</p>
                        </a>

                        <a href="service.pk@realme.com">
                            <p>service.pk@realme.com</p>
                        </a>
                    </div>

                    <div className="Footer-link-div">
                        <h3>04238048018</h3>
                        <p>09:30 - 18:00， MON - SAT</p>
                    </div>
                </div>

                <hr />

                <div className="Footer-link-below">
                    <div className="Footer-copyright">
                        <p>
                            {(new Date().getFullYear)} codein.All right reserved
                        </p>
                    </div>

                    <div className="Footer-link-below ">
                            <div><p>User Agreement</p></div>
                            <div><p>Pricvacy policy</p></div>
                            <div><p>Terms of sales</p></div>
                            <div><p>Warranty Terms</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;