import React from 'react';

const SectionTitle = ({children}) => {
    return (
        <h2 className="text-2xl mb-5 md:text-4xl font-bold text-center">
            {children}
        </h2>
    );
};

export default SectionTitle;