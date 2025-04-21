import footerLogo from "./../assets/logo-footer.png";
import Li from "./Li";

const Footer = () => {
    return (
        <div className="bg-[#06091A] p-20 mt-10 flex flex-col items-center justify-center gap-16">
            <div>
                <img src={footerLogo} alt="footer logo" />
            </div>
            <div className="flex lg:gap-40 gap-5 lg:flex-row flex-col">
                <div>
                    <h2 className="text-lg font-semibold text-white">
                        About Us
                    </h2>
                    <p className="text-[#FFFFFF99] w-2xs">
                        We are a passionate team dedicated to providing the best
                        services to our customers.
                    </p>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-white">
                        Quick Links
                    </h2>
                    <ul className="text-[#FFFFFF99]">
                        <Li>Home</Li>
                        <Li>Services</Li>
                        <Li>About</Li>
                        <Li>Contact</Li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-white">
                        Subscribe
                    </h2>
                    <p className="text-[#FFFFFF99]">
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div>
                        <form className="mt-5 flex lg:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="border-[#FFFFFF26] border-2 bg-white lg:p-5 p-3 outline-0 rounded-tl-xl rounded-bl-xl "
                            />
                            <button
                                type="submit"
                                className="lg:p-5 p-3 bg-amber-400 font-bold rounded-tr-xl rounded-br-xl"
                                onClick={(e) => e.preventDefault()}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
