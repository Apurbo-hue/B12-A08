import React from 'react';
import logo from './../../images/logo.png'
import { Link } from 'react-router';
import x from './../../images/x.png'
import linkedin from './../../images/linkedin.png'
import facebook from '../../images/facebook.png'

const Footer = () => {
    return (
        <div>
            <footer className='bg-[#001931] px-4 rounded-xl'>
                <div className='flex justify-between p-4'>
                                    <Link to="/" className="btn btn-ghost text-xl text-[#6d36e6]"><img src={logo} alt="" />HERO.IO</Link>
                <div className='flex items-center gap-2'>
                    <h1>Socials:</h1>
                    <a href="https://x.com/" target='blank'><img src={x} alt="" /></a>
                    <a href="https://linkedin.com/" target='blank'><img src={linkedin} alt="" /></a>
                    <a href="https://facebook.com/" target='blank'><img src={facebook} alt="" /></a>
                </div>
                </div>
                <footer className="footer sm:footer-horizontal footer-center text-base-content p-4 border-t">
                    <aside >
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO</p>
                    </aside>
                </footer>
            </footer>


        </div>
    );
};

export default Footer;