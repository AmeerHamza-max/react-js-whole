import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false);
    const [bgcolor, setBgcolor] = useState('white');

    useEffect(() => {
        setBgcolor(showInput ? '#1a1a1a' : 'white');
    }, [showInput]);

    const handleClick = (e) => {
        if (e.target.classList.contains('container')) {
            setShowInput(false);
        }
    };

    const handleSearchClick = (e) => {
        e.stopPropagation(); // Prevents triggering `handleClick`
        setShowInput(true);
    };

    return (
        <section 
            className='container' 
            style={{ 
                backgroundColor: bgcolor, 
                width: '100vw', 
                height: '100vh', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }} 
            onClick={handleClick}
        >
            {showInput ? (
                <input type='text' placeholder='Search...' autoFocus />
            ) : (
                <FaSearch onClick={handleSearchClick} size={24} />
            )}
        </section>
    );
};

export default HiddenSearchBar;
