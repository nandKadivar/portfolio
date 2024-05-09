import { useState } from "react";

const FigmaIcon = () => {
    const [color, setColor] = useState(['#94aab9', '#94aab9', '#94aab9', '#94aab9', '#94aab9']);

    return(
        <div className="flex justify-center items-center">
            <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor(['#0ACF83', '#A259FF', '#F24E1E', '#FF7262', '#1ABCFE'])}} onMouseLeave={() => {setColor(['#94aab9', '#94aab9', '#94aab9', '#94aab9', '#94aab9'])}}>
                <g clip-path="url(#clip0_343_3)">
                <path d="M6 36C9.312 36 12 33.312 12 30V24H6C2.688 24 0 26.688 0 30C0 33.312 2.688 36 6 36Z" fill={color[0]} />
                <path d="M0 18C0 14.688 2.688 12 6 12H12V24H6C2.688 24 0 21.312 0 18Z" fill={color[1]} />
                <path d="M0 6C0 2.688 2.688 0 6 0H12V12H6C2.688 12 0 9.312 0 6Z" fill={color[2]} />
                <path d="M12 0H18C21.312 0 24 2.688 24 6C24 9.312 21.312 12 18 12H12V0Z" fill={color[3]} />
                <path d="M24 18C24 21.312 21.312 24 18 24C14.688 24 12 21.312 12 18C12 14.688 14.688 12 18 12C21.312 12 24 14.688 24 18Z" fill={color[4]} />
                </g>
                <defs>
                <clipPath id="clip0_343_3">
                <rect width="24" height="36" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>

    );
}

export default FigmaIcon;