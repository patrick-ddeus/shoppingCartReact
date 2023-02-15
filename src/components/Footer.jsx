import React from 'react';

export default function Footer () {
    const data = new Date();
    return (
        <footer className='footer-page'>
            <div>Copyright © {data.getFullYear()} @patric-ddeus</div>
        </footer>
    );
}
