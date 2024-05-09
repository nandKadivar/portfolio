import { useState } from "react";

const JavaIcon = () => {
    const [color, setColor] = useState(['#94aab9', '#fff']);
    
    return(
        <div className="flex justify-center items-center">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor(['#242938', '#F58219'])}} onMouseLeave={() => {setColor(['#94aab9', '#fff'])}}>
                <g clip-path="url(#clip0_330_32)">
                <path d="M32.1562 0H9.84375C4.4072 0 0 4.4072 0 9.84375V32.1562C0 37.5928 4.4072 42 9.84375 42H32.1562C37.5928 42 42 37.5928 42 32.1562V9.84375C42 4.4072 37.5928 0 32.1562 0Z" fill={color[0]} />
                <path d="M16.6743 29.9609C16.6743 29.9609 15.4143 30.7277 17.5513 30.9471C20.1316 31.2759 21.496 31.2209 24.3446 30.6734C24.3446 30.6734 25.1114 31.1671 26.1526 31.5502C19.7418 34.2894 11.6335 31.3858 16.6743 29.9609ZM15.8526 26.3999C15.8526 26.3999 14.4826 27.4411 16.6194 27.6598C19.413 27.9336 21.6054 27.9885 25.3857 27.2222C25.3857 27.2222 25.8794 27.7703 26.7007 28.0442C18.9761 30.3451 10.3191 28.2629 15.8526 26.4004V26.3999ZM30.9742 32.6458C30.9742 32.6458 31.9054 33.4126 29.9331 34.0157C26.262 35.1113 14.5376 35.4406 11.2503 34.0157C10.1004 33.522 12.2916 32.8095 13.0035 32.7007C13.7158 32.5364 14.0991 32.5364 14.0991 32.5364C12.8391 31.6596 5.71629 34.3443 10.483 35.1169C23.5773 37.2541 34.371 34.1857 30.9737 32.6514L30.9742 32.6458ZM17.2769 22.6739C17.2769 22.6739 11.3047 24.0988 15.1395 24.5913C16.7833 24.81 20.0156 24.7557 23.0291 24.5363C25.4947 24.3175 27.9658 23.8789 27.9658 23.8789C27.9658 23.8789 27.0889 24.2625 26.4864 24.6458C20.3999 26.236 8.72995 25.5237 12.0722 23.8799C14.922 22.51 17.2769 22.6739 17.2769 22.6739ZM27.96 28.6459C34.0971 25.4681 31.2474 22.4001 29.275 22.7838C28.7813 22.8933 28.5626 23.0027 28.5626 23.0027C28.5626 23.0027 28.7269 22.6739 29.1106 22.5651C33.0004 21.1952 36.069 26.6742 27.8508 28.811C27.8508 28.811 27.9057 28.756 27.96 28.6466V28.6459ZM17.8794 37.3019C23.7966 37.6856 32.8366 37.083 33.056 34.2882C33.056 34.2882 32.6184 35.3838 28.1801 36.2058C23.1397 37.137 16.8932 37.0276 13.2228 36.4245C13.2228 36.4245 13.9896 37.0819 17.8799 37.3012L17.8794 37.3019Z" fill="white"/>
                <path d="M24.2298 4.59375C24.2298 4.59375 27.6265 8.04546 20.9974 13.2497C15.6828 17.4681 19.7914 19.8791 20.9974 22.6178C17.8745 19.8242 15.6289 17.3581 17.1621 15.057C19.4139 11.6621 25.6041 10.0183 24.2298 4.59375ZM22.4768 20.3178C24.0654 22.1258 22.0392 23.7695 22.0392 23.7695C22.0392 23.7695 26.0933 21.6882 24.2309 19.1123C22.5322 16.6468 21.2174 15.4412 28.34 11.3316C28.34 11.3316 17.1083 14.1253 22.4779 20.3167L22.4768 20.3178Z" fill={color[1]} />
                </g>
                <defs>
                <clipPath id="clip0_330_32">
                <rect width="42" height="42" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default JavaIcon;