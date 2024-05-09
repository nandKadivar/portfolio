import { useState } from "react";

const JqueryIcon = () => {
    const [color1, setColor1] = useState('#94aab9');
    const [color2, setColor2] = useState('#94aab9');
    
    return(
        <div className="flex justify-center items-center">
            <svg width="125" height="28" viewBox="0 0 125 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor1('#21609B');setColor2('#1A1918')}} onMouseLeave={() => {setColor1('#94aab9');setColor2('#94aab9')}}>
                <g clip-path="url(#clip0_343_55)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M119.56 2.08698L124.789 2.11546C124.789 2.11546 115.067 15.1413 114.273 16.2028C114.015 16.5466 113.623 16.9173 113.425 17.3769C112.922 18.5321 112.407 21.0664 112.407 21.0664L107.622 21.09C107.622 21.09 108.366 18.4484 108.336 17.0414C108.309 15.8123 107.674 14.5846 107.318 13.3519C106.958 12.104 106.47 9.66218 106.47 9.66218H111.389L112.068 12.3456L119.56 2.08698Z" fill={color2} />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M109.657 4.83412C110.622 5.40932 111.215 8.5825 111.215 8.5825C111.215 8.5825 106.165 8.65612 103.417 8.65612H101.042L98.1582 21.0664H93.748C93.748 21.0664 96.4927 7.57956 97.1406 5.13439C97.3506 4.34267 98.5791 4.47856 100.654 4.47856H103.966C106.105 4.47856 108.606 4.20846 109.657 4.83412ZM89.1257 10.8783C89.1257 10.8783 89.2632 10.0817 88.6594 9.15915C88.1436 8.37274 87.6672 8.18977 86.3101 8.14777C82.4783 8.02877 82.5527 10.8363 82.5527 10.8363L89.1257 10.8783ZM93.2815 7.66308C93.843 9.66581 92.7727 14.3715 92.7727 14.3715C92.7727 14.3715 87.1833 14.2793 84.1218 14.3715C83.1699 14.4002 82.0305 14.2692 81.7471 14.707C81.3484 15.3206 81.8928 16.2651 82.3542 16.6641C82.8853 17.1235 83.9197 17.1758 84.2915 17.2224C86.7764 17.5345 91.9771 17.303 91.9771 17.303L91.0762 21.2472C91.0762 21.2472 83.7268 21.6117 80.0508 20.7442C79.325 20.5733 78.6445 20.2278 78.1848 19.7381C78.0593 19.6041 77.9504 19.4214 77.8318 19.2635C77.7371 19.1375 77.4607 18.7236 77.3367 18.3963C76.4971 16.1843 77.4351 11.9466 78.3545 9.6757C78.4612 9.4126 78.5952 9.07877 78.7363 8.79515C78.9126 8.44153 79.0618 8.04229 79.2026 7.83084C79.2974 7.68505 79.4148 7.59115 79.5132 7.45356C79.6267 7.29087 79.7588 7.13325 79.8811 6.99253C80.2205 6.60343 80.6055 6.32825 81.0686 5.98646C82.6001 4.85246 85.3718 3.97215 88.7017 4.30912C89.9553 4.43656 91.8486 4.87925 92.7727 6.15398C93.0203 6.49432 93.1426 7.16994 93.2815 7.66308ZM73.0537 4.46312L77.3301 4.43825C77.3301 4.43825 74.9468 15.6158 73.7322 21.0664H68.8127C65.3748 21.0664 62.313 21.4874 61.0103 19.0538C59.7466 16.6909 60.9526 12.8052 61.519 10.1652C61.9194 8.29694 62.7627 4.47832 62.7627 4.47832L67.1934 4.43825C67.1934 4.43825 65.9414 10.3834 65.4204 13.3519C65.2339 14.4152 64.8491 15.4164 65.251 16.2026C65.6326 16.9509 66.167 17.0045 67.7952 17.0414C68.311 17.0535 70.0005 17.0414 70.0005 17.0414L73.0537 4.46312ZM53.0378 12.5131C53.4856 10.9403 54.1387 9.2347 54.0557 7.81732C53.9658 6.30146 52.6802 4.92125 51.8506 4.63112C49.352 3.75901 47.0129 4.97822 46.0833 5.9727C44.8806 7.2607 44.4734 8.76522 44.0476 10.8365C43.7307 12.3741 43.4709 13.9974 44.0476 15.1965C45.0686 17.3166 48.2527 16.8536 51.6809 16.8739C52.1897 15.5255 52.6104 14.0111 53.0378 12.5131ZM58.9749 6.30822C59.4631 9.81981 57.5891 13.6959 56.2981 17.0665C57.6145 17.184 58.7681 17.0484 58.8511 17.1454C58.9375 17.2712 57.9687 21.1687 57.6311 21.1789C56.5864 21.2057 53.1245 21.2342 51.6809 21.2342C46.9702 21.2342 42.5635 21.5376 40.3162 19.2218C39.4036 18.2809 38.7725 16.6673 38.6196 15.532C38.3652 13.637 38.6841 11.5505 39.1287 9.83018C39.5308 8.27691 40.0461 6.81125 40.825 5.46943C42.8044 2.05343 46.2478 -0.482263 52.02 0.103082C53.1396 0.217013 54.7476 0.701703 55.752 1.27691C55.8213 1.31722 56.0642 1.50839 56.1199 1.54194C57.477 2.3957 58.7136 4.43319 58.9749 6.30822ZM38.1328 4.48339C37.8479 5.76632 37.563 7.22063 37.2627 8.48836H32.5132C32.8811 7.08305 33.1628 5.68594 33.531 4.46336C35.0508 4.46336 36.4639 4.48339 38.1331 4.48339M32.3435 9.66243H36.9236C36.3247 12.9394 35.1389 18.2254 34.2095 21.9049C33.6277 24.2077 33.2393 25.8879 31.665 27.1038C31.5242 27.2129 31.4429 27.161 31.3257 27.2715C31.0356 27.545 29.6938 27.8622 28.9512 27.9423C27.7434 28.0717 26.3779 27.9592 24.8936 27.929C25.282 26.5254 25.7214 24.8399 26.0676 23.5818C29.6858 24.0148 29.7773 20.6336 30.4778 17.3769C30.8831 15.4951 32.1113 10.417 32.3435 9.66243Z" fill={color2} />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.657 18.2157L21.5589 18.467C19.8865 21.687 16.9229 23.6627 12.6959 23.7498C10.7198 23.7899 8.83698 23.2888 7.607 22.7435C4.9527 21.5648 2.72004 19.3779 1.5008 17.0416C-0.248227 13.6925 -0.563656 9.03337 3.07306 5.55365C3.12921 5.55365 2.6319 6.3082 2.68805 6.3082L2.58796 6.6302C-0.0326504 14.7422 8.04132 21.6937 15.89 20.8986C17.7762 20.7077 20.1815 19.6864 21.657 18.2157Z" fill={color1} />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9075 14.8613C18.8821 14.8748 20.9446 13.9624 22.166 12.6811C21.0974 15.3628 18.0034 17.0868 13.8545 16.5384C10.3804 16.0788 7.07103 12.6225 6.73021 9.1594C6.48094 6.63868 7.36937 5.1344 8.83348 3.30981C8.32469 4.26399 8.1345 5.00019 8.08714 5.46968C7.53099 10.922 12.4924 14.8328 16.9075 14.8613Z" fill={color1} />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9676 8.08935C21.6608 8.78549 19.8934 10.1 19.1129 10.2642C16.0223 10.9152 14.0431 9.46617 13.0062 7.81755C12.8522 7.57111 12.5673 6.89862 12.5162 6.72749C12.1141 5.37576 12.2989 3.33128 13.4984 2.27307C13.1371 3.27962 13.0843 4.44814 13.2745 5.208C13.3898 5.66759 13.7408 6.46945 14.0922 6.97393C14.7313 7.89311 15.1366 8.11638 15.9579 8.60421C16.3278 8.82386 16.7245 9.00007 16.8959 9.04859C17.6744 9.275 19.318 9.87217 21.9676 8.08935Z" fill={color1} />
                </g>
                <defs>
                <clipPath id="clip0_343_55">
                <rect width="125" height="28" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default JqueryIcon;