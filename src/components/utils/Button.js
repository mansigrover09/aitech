import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ link, bgColor, children }) => {
    return (
        <div>
            <Link to={link} className={`${bgColor} rounded-md py-2 px-5 flex justify-center items-center text-white w-fit text-sm font-normal font-poppin`}>{children}</Link>
        </div>
    );
};

export default Button;