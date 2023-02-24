import React from 'react';
import { FooterPage } from './styles';

const Footer = () => {
    const data = new Date();
    return (
        <FooterPage>
            <div>Copyright © {data.getFullYear()} @patric-ddeus</div>
        </FooterPage>
    );
}

export default Footer