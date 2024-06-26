import { useState } from "react";

const MuiIcon = () => {
    const [color, setColor] = useState(['#94aab9', '#94aab9']);

    return(
        <div className="flex justify-center items-center">
           <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor(['#1FA6CA', '#1C7FB6'])}} onMouseLeave={() => {setColor(['#94aab9', '#94aab9'])}}>
                <path d="M0.078125 26.7969V5.23438L18.75 16.0156V23.2031L6.28906 16.0156V30.3906L0.078125 26.7969Z" fill={color[0]} />
                <path d="M18.75 16.0156L37.4609 5.23438V26.8359L25 33.9844L18.75 30.3906L31.25 23.2031V16.0156L18.75 23.2031V16.0156Z" fill={color[1]} />
                <path d="M18.75 30.3906V37.5781L31.25 44.7656V37.5781L18.75 30.3906Z" fill={color[0]}/>
                <path d="M31.25 44.7656L49.9219 33.9844V19.6094L43.6719 23.2031V30.3906L31.25 37.5781V44.7656ZM43.7109 16.0156V8.82813L49.9609 5.23438V12.4219L43.7109 16.0156Z" fill={color[1]} />
            </svg>
        </div>
    );
}

export default MuiIcon;