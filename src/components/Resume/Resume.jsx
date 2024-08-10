import discord from '../../assets/socials/discord.png'
import email from '../../assets/socials/email.png'
import github from '../../assets/socials/github.png'
import linkedin from '../../assets/socials/linkedin.png'
import twitter from '../../assets/socials/twitter.png'

import hash from '../../assets/bg-elements/hash.svg'

import pfp from '../../assets/misc/pfp.png'
import { useEffect, useState } from 'react';
import './resume.css'

const formatTime = (date) => {
    let utcHours = date.getUTCHours();
    let utcMinutes = date.getUTCMinutes();
    let utcSeconds = date.getUTCSeconds();

    // Convert to IST (UTC +5:30)
    let istHours = utcHours + 5;
    let istMinutes = utcMinutes + 30;
    let istSeconds = utcSeconds;

    if (istMinutes >= 60) {
        istMinutes -= 60;
        istHours += 1;
    }

    if (istHours >= 24) {
        istHours -= 24;
    }

    // Pad hours, minutes, and seconds with leading zeros
    istHours = istHours.toString().padStart(2, '0');
    istMinutes = istMinutes.toString().padStart(2, '0');
    istSeconds = istSeconds.toString().padStart(2, '0');

    return `${istHours}:${istMinutes}:${istSeconds}`;
};


function Resume() {
    let [time, setTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            let date = new Date();
            let istTime = formatTime(date);
            setTime(istTime);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);


    return (
        <section id="resume" className="wrapper">
            <img className='hash' src={hash} alt="bg element" />
            <div className='resume-pfp'>
                <img src={pfp} alt="ManasJhaMJ on all Socials" />
                <span className='pfp-text'>
                    <h1>@<span className="highlight">Remi4work</span></h1>
                    <h2>on all socials</h2>
                    <h3>{time} IST</h3>
                </span>
            </div>
            <div className='socials'>
                <a href="https://x.com/remi4work" target="_blank" rel="noopener noreferrer"><button>
                    <div className="side">
                    </div>
                    Hire Me!
                </button></a>
                <div className="home-socials">
                    <a href="mailto:work4remi@gmail.com" target="_blank" rel="noopener noreferrer"><img src={email} alt="" /></a>
                    <a href="https://github.com/remi4work" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                    <a href="https://x.com/remi4work" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
                </div>
            </div>
        </section>
    )
}

export default Resume