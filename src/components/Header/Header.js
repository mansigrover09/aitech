import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import Button from '../utils/Button';

const Header = ({ navigation }) => {

    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    }
    return (
        <>
            <header className="h-[80px] md:h-[100px] border-b border-gray-200 px-2 md:px-36 py-1 md:py-2 flex justify-between items-center">
                <div className="brand-logo w-20 md:w-32 p-1 md:p-2">
                    <Link to="/">
                        <img src={logo} className="cursor-pointer" alt="logo" />
                    </Link>

                </div>
                {
                    navigation &&
                    <>
                        <div className="navigation pr-8 hidden md:block lg:mr-5">
                            <ul className="flex items-center gap-x-8 md:text-md lg:text-lg font-poppin font-[500]">
                                <li>
                                    <NavLink className="hover:text-primary duration-100" to="/">Home</NavLink>

                                </li>
                                {/* <li>
                            <NavLink className="hover:text-primary duration-100"  to="/">How It Works</NavLink>
                        </li> */}
                                <li>
                                    <a className="hover:text-primary duration-100" href="#services">Services</a>
                                </li>
                                <li>
                                    <a className="hover:text-primary duration-100" href="#contact">Contact Us</a>
                                </li>
                                <li>
                                    <NavLink className="hover:text-primary duration-100" to="/login">Login</NavLink>
                                </li>
                                <li>
                                    <Button link={"/register"} bgColor="bg-primary">Create Your Store</Button>
                                </li>
                            </ul>
                        </div>

                        {/* mobile navigation */}
                        <div className="mobile-navigation pr-8 md:hidden">
                            {
                                navOpen
                                    ?
                                    <AiOutlineClose onClick={toggleNav} size="25" cursor="pointer" />
                                    :
                                    <FaBars onClick={toggleNav} size="25" cursor="pointer" />

                            }


                        </div>
                    </>
                }


            </header>
            {
                navOpen &&
                <div className="w-full bg-[#f9f9f9] md:hidden">
                    <ul className="flex flex-col gap-y-2 text-lg font-poppin pl-5 py-5 ">
                        <li>
                            <NavLink to="/">Home</NavLink>

                        </li>
                        {/* <li>
                                <NavLink to="/">How It Works</NavLink>
                            </li> */}
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                        <li>
                            <NavLink className="hover:text-primary duration-100" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <Button link={"/register"} bgColor="bg-primary">Create Your Store</Button>
                        </li>
                    </ul>
                </div>


            }

        </>
    );
};

export default Header;