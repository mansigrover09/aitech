import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom'
import { AiFillInstagram, AiFillYoutube, AiFillMail, AiFillPhone, AiFillHome } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
const Footer = () => {
    return (
 
        <footer>


            <div className="px-2 md:px-4 lg:px-10 py-10 bg-[#FAFAFA]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="flex flex-col items-center">
                        <img src={logo} className="w-60" alt="" />
                        <div className="social flex gap-2 mt-8">
                            <span className="w-[40px] h-[40px] p-1 rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer">
                                <Link to="/" >

                                    <AiFillInstagram size={25} />
                                </Link>
                            </span>
                            <span className="w-[40px] h-[40px] p-1 rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer">
                                <Link to="/" >
                                    <AiFillYoutube size={25} />
                                </Link>
                            </span>
                            <span className="w-[40px] h-[40px] p-1 rounded-full bg-white shadow-md flex justify-center items-center cursor-pointer">
                                <Link to="/" >
                                    <FaFacebookF size={25} />
                                </Link>
                            </span>

                        </div>
                    </div>
                    <div>
                        <p className="text-justify w-full">
                            AI TECH is an emerging IT consultancy and digitization agency that enables brands to propel their businesses into the twenty first century through a comprehensive technological transformation ensured with premium web development, business intelligence, cyber security, support and maintenance, and cloud solutions.
                        </p>
                    </div>

                    <div className="md:px-5">
                        <h6 className="text-lg mb-5">Contact us</h6>
                        <div className="flex gap-2 my-2">
                            <AiFillMail size={20} />
                            <span>info@pythonistindia.com</span>
                        </div>
                        <div className="flex gap-2 my-2">
                            <AiFillPhone size={20} />
                            <span>+91 7411535043</span>
                        </div>
                        <div className="flex gap-2">
                            <AiFillHome size={20} />
                            <span>Jayant Santis ,ramanashree california garden near anantapur gate yelhanka-560042</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="footer-bottom border border-t py-2">
                <p className="text-center text-sm">
                Copyright {new Date().getFullYear()}, All Rights Reserved @ <a href="/">pythonistindia.com</a>
                </p>

            </div>
        </footer>

    );
};

export default Footer;