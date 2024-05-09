import { useState } from "react";

const ExpressIcon = () => {
    const [color, setColor] = useState('#94aab9');
    
    return(
        <div className="flex justify-center items-center">
            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor('#242938')}} onMouseLeave={() => {setColor('#94aab9')}}>
                <g clip-path="url(#clip0_343_68)">
                <path d="M31.3906 0H9.60938C4.30226 0 0 4.30226 0 9.60938V31.3906C0 36.6977 4.30226 41 9.60938 41H31.3906C36.6977 41 41 36.6977 41 31.3906V9.60938C41 4.30226 36.6977 0 31.3906 0Z" fill={color} />
                <path d="M36.5156 29.2985C36.0494 29.4751 35.5346 29.4747 35.0686 29.2975C34.6026 29.1203 34.2177 28.7785 33.9866 28.3368C32.5351 26.1639 30.9323 24.0891 29.3917 21.9698L28.7237 21.0793C26.8893 23.537 25.0548 25.8968 23.3807 28.3457C23.1627 28.768 22.7986 29.0965 22.3562 29.2702C21.9139 29.4438 21.4235 29.4508 20.9765 29.2897L27.86 20.0553L21.4573 11.7111C21.9181 11.5447 22.4224 11.5424 22.8847 11.7046C23.3471 11.8668 23.7394 12.1837 23.9953 12.6016C25.4823 14.7746 27.1298 16.8494 28.7682 19.049C30.4158 16.8672 32.0453 14.7834 33.5681 12.6283C33.7874 12.213 34.1517 11.8927 34.5917 11.7285C35.0318 11.5643 35.5168 11.5676 35.9546 11.7379L33.4701 15.0328C32.357 16.502 31.2617 17.9803 30.1041 19.414C30.0107 19.4975 29.9361 19.5997 29.885 19.7141C29.8338 19.8284 29.8074 19.9522 29.8074 20.0774C29.8074 20.2027 29.8338 20.3265 29.885 20.4408C29.9361 20.5551 30.0107 20.6574 30.1041 20.7409C32.2324 23.5638 34.3428 26.3955 36.5156 29.2985ZM4.48438 19.9395C4.67144 19.049 4.78707 18.0783 5.0454 17.17C6.58595 11.6935 12.8639 9.41367 17.1828 12.8066C19.7119 14.7925 20.3442 17.6065 20.2196 20.7766H5.97159C5.74 26.4402 9.82735 29.8597 15.0545 28.1143C15.9025 27.811 16.6615 27.3013 17.2632 26.6312C17.8648 25.9611 18.2901 25.1517 18.5008 24.2762C18.7769 23.3857 19.2221 23.2344 20.0681 23.4925C19.9288 24.5766 19.5455 25.6151 18.9471 26.5297C18.3486 27.4443 17.5506 28.2114 16.613 28.7732C15.0639 29.6204 13.2866 29.956 11.5352 29.7321C9.78388 29.5082 8.14817 28.7362 6.86205 27.5265C5.58966 26.0959 4.82032 24.2882 4.67144 22.3794C4.67144 22.0767 4.55564 21.7739 4.49334 21.489C4.48745 20.9725 4.48446 20.456 4.48438 19.9395ZM5.98936 19.5565H18.8749C18.7947 15.4514 16.2033 12.5394 12.7483 12.5129C8.90132 12.4594 6.14968 15.3089 5.98039 19.5387L5.98936 19.5565Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_343_68">
                <rect width="41" height="41" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default ExpressIcon;