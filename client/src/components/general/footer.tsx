import React from 'react';



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer className='mx-[184px]'>
            <div className='upper'>
                <p>Follow me</p>
                <div className='socials'>
                    {/* Socials */}
                </div>
            </div>
            <div className='lower'>
               &copy; apexx9 {currentYear}
            </div>
        </footer>
    )
}


export default Footer;