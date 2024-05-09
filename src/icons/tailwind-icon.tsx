import { useState } from "react";

const TailwindIcon = () => {
    const [color, setColor] = useState('#94aab9');

    return(
        <div className="flex justify-center items-center">
            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor('#38BDF8')}} onMouseLeave={() => {setColor('#94aab9')}}>
                <g clip-path="url(#clip0_343_53)">
                <path d="M25.502 10.2008C18.7018 10.2008 14.4533 13.5995 12.752 20.3996C15.3012 17.0005 18.2771 15.7259 21.6762 16.5758C23.6169 17.0595 25.0039 18.4668 26.5399 20.0263C29.0397 22.5631 31.9331 25.5 38.252 25.5C45.0517 25.5 49.3006 22.1009 51.002 15.2992C48.452 18.7 45.4771 19.9753 42.0774 19.125C40.137 18.6409 38.7516 17.234 37.2136 15.6745C34.7154 13.1377 31.8228 10.2008 25.502 10.2008ZM12.752 25.5C5.95222 25.5 1.70328 28.8991 0.00195312 35.7008C2.55169 32.3 5.52642 31.0247 8.92616 31.875C10.8669 32.3591 12.2539 33.766 13.7899 35.3255C16.2897 37.8623 19.1831 40.7992 25.502 40.7992C32.3017 40.7992 36.5506 37.4005 38.252 30.6004C35.702 33.9996 32.7271 35.2742 29.3274 34.4242C27.387 33.9405 26.0016 32.5332 24.4636 30.9737C21.9654 28.4369 19.0728 25.5 12.752 25.5Z" fill={color} />
                </g>
                <defs>
                <clipPath id="clip0_343_53">
                <rect width="51" height="51" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default TailwindIcon;