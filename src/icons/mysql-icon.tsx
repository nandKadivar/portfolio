import { useState } from "react";

const MySqlIcon = () => {
    const [color, setColor] = useState(['#94aab9', '#94aab9']);
    
    return(
        <div className="flex justify-center items-center">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor(['#00618A', '#E48E00'])}} onMouseLeave={() => {setColor(['#94aab9', '#94aab9'])}}>
                <g clip-path="url(#clip0_343_20)">
                <path d="M0 38.5227H1.78959V31.4576L4.55962 37.6161C4.88573 38.3628 5.3325 38.6248 6.21084 38.6248C7.08919 38.6248 7.51781 38.3628 7.84392 37.6161L10.614 31.4576V38.5223H12.4035V31.4694C12.4035 30.7804 12.1285 30.4476 11.5598 30.2763C10.2001 29.8527 9.28884 30.2185 8.87541 31.1365L6.15811 37.2157L3.52645 31.1365C3.13116 30.2185 2.20177 29.8527 0.84375 30.2763C0.275062 30.4476 0 30.7804 0 31.4694L0 38.5227ZM13.8923 32.7713H15.6802V36.6639C15.6638 36.8748 15.7478 37.371 16.7282 37.3874H20.6191V32.7514H22.4121C22.4205 32.7514 22.4087 39.0728 22.4087 39.0994C22.4184 40.6582 20.4757 40.9961 19.5792 41.0227H13.9303V39.8195L19.5893 39.8178C20.7411 39.6976 20.6044 39.1239 20.6044 38.9328V38.4632H16.8024C15.0327 38.4468 13.9071 37.6739 13.8923 36.7854C13.8907 36.7048 13.9303 32.8109 13.8923 32.7713Z" fill={color[0]} />
                <path d="M23.79 38.5227H28.9348C29.5364 38.5227 30.1215 38.3957 30.586 38.1784C31.3606 37.824 31.7377 37.3414 31.7377 36.7103V35.4033C31.7377 34.8874 31.3091 34.4047 30.4654 34.085C30.0186 33.912 29.4668 33.8213 28.9344 33.8213H26.7655C26.0437 33.8213 25.6994 33.6036 25.6138 33.1227C25.5974 33.0649 25.5974 33.0189 25.5974 32.9611V32.1469C25.5974 32.1009 25.5974 32.0545 25.6138 31.9971C25.6994 31.6313 25.8889 31.5276 26.5251 31.4698L26.698 31.4584H31.8065V30.267H26.7841C26.0623 30.267 25.6834 30.313 25.3387 30.4155C24.2727 30.7484 23.8078 31.2757 23.8078 32.1937V33.237C23.8078 34.0394 24.719 34.7283 26.25 34.8882L26.7659 34.9114H28.6247C28.6939 34.9114 28.7614 34.9114 28.8142 34.9228C29.3812 34.9688 29.6216 35.0726 29.7946 35.2789C29.8836 35.3611 29.9346 35.4784 29.9313 35.5987V36.6436C29.9313 36.7689 29.8456 36.9305 29.6744 37.0672C29.5195 37.2056 29.2609 37.2963 28.9179 37.3195L28.7285 37.3309H23.79V38.5227ZM42.8997 36.4462C42.8997 37.6739 43.8126 38.3611 45.6516 38.4995L46.1692 38.5227H50.8314V37.3296H46.1347C45.085 37.3296 44.6893 37.0659 44.6893 36.4348V30.2645H42.9014V36.4458L42.8997 36.4462ZM32.8802 36.5086V32.2553C32.8802 31.1757 33.64 30.5201 35.1393 30.3138C35.2993 30.2907 35.4607 30.2792 35.6224 30.2792H39.0172C39.1902 30.2792 39.345 30.2906 39.5184 30.3138C41.0181 30.5197 41.7763 31.1757 41.7763 32.2553V36.5086C41.7763 37.3853 41.4548 37.8536 40.7119 38.1599L42.4753 39.7503H40.3971L38.9716 38.4632L37.5364 38.5539H35.6232C35.2676 38.5528 34.9139 38.5028 34.5719 38.4054C33.4333 38.0957 32.881 37.4975 32.881 36.5086H32.8802ZM34.8115 36.4049C34.8115 36.4627 34.828 36.52 34.8461 36.5896C34.9499 37.0841 35.4148 37.3591 36.1214 37.3591H37.7465L36.2535 36.0112H38.3316L39.6336 37.1879C39.874 37.0592 40.0305 36.8647 40.0866 36.6128C40.1031 36.555 40.1031 36.4977 40.1031 36.4399V32.3612C40.1031 32.3152 40.1031 32.2574 40.0866 32.1996C39.9829 31.7398 39.518 31.4761 38.8278 31.4761H36.1219C35.3292 31.4761 34.8119 31.8203 34.8119 32.3612L34.8115 36.4049Z" fill={color[1]} />
                <path d="M52.405 28.2854C51.306 28.2559 50.4652 28.358 49.7468 28.6613C49.5426 28.747 49.216 28.7487 49.1831 29.0043C49.2954 29.1229 49.3135 29.2992 49.4025 29.4426C49.5738 29.7211 49.864 30.0919 50.1227 30.2864L50.9976 30.9125C51.5347 31.2402 52.1363 31.4284 52.6556 31.7562C52.9606 31.9507 53.2635 32.1945 53.5618 32.4139C53.7086 32.5211 53.8073 32.6907 54.0001 32.7582V32.7269C53.8997 32.5983 53.8731 32.4219 53.7807 32.2886L53.3736 31.8815C52.9766 31.3542 52.4721 30.8909 51.935 30.5053C51.5064 30.1986 50.5509 29.7835 50.3711 29.2857L50.3399 29.2545C50.6432 29.2216 50.9993 29.111 51.2777 29.0368C51.749 28.9098 52.1692 28.9427 52.6539 28.8174L53.3116 28.628V28.5044C53.0661 28.2521 52.8914 27.9192 52.6227 27.6902C51.9241 27.0953 51.1592 26.4988 50.3716 26.001C49.9349 25.7259 49.3962 25.5479 48.933 25.3137C48.7781 25.2349 48.5043 25.1952 48.4006 25.0632C48.1584 24.7535 48.0264 24.3612 47.8386 24L46.7131 21.6236C46.476 21.0815 46.3207 20.5457 46.0241 20.0597C44.6054 17.7246 43.0761 16.3156 40.7077 14.9314C40.2052 14.6365 39.5969 14.5209 38.9577 14.3695L37.9246 14.307C37.7153 14.218 37.4976 13.9611 37.3002 13.8375C36.5159 13.3414 34.5036 12.2639 33.9218 13.681C33.556 14.5758 34.4707 15.449 34.7985 15.9026C35.0275 16.2207 35.3224 16.5767 35.4857 16.934C35.5945 17.1682 35.6127 17.4036 35.7051 17.6525C35.9325 18.2655 36.1303 18.9312 36.4252 19.4982C36.5737 19.7851 36.7366 20.0867 36.9247 20.342C37.0399 20.4985 37.2377 20.5693 37.269 20.8115C37.0762 21.0819 37.0648 21.5004 36.9559 21.843C36.4666 23.3837 36.6509 25.2986 37.363 26.4406C37.5807 26.7899 38.0946 27.5412 38.8016 27.2531C39.4197 27.0008 39.2813 26.2216 39.4577 25.5327C39.499 25.3779 39.4741 25.2623 39.5517 25.1585V25.1897L40.1154 26.3153C40.5322 26.9861 41.2704 27.6864 41.8969 28.1593C42.223 28.4048 42.4787 28.8301 42.8989 28.9735V28.9406H42.8677C42.7854 28.8153 42.6584 28.7626 42.5546 28.6605C42.3091 28.42 42.037 28.1217 41.8362 27.8463C41.2658 27.0734 40.7617 26.2263 40.3035 25.3445C40.0841 24.9244 39.893 24.4595 39.7087 24.0312C39.6378 23.8663 39.6395 23.6161 39.491 23.5317C39.2885 23.8448 38.9902 24.0987 38.8333 24.4696C38.5827 25.061 38.5515 25.7846 38.4574 26.533L38.3949 26.5642C37.96 26.4587 37.8064 26.0107 37.6453 25.6264C37.2348 24.6539 37.1593 23.0867 37.52 21.9679C37.6124 21.678 38.0342 20.7647 37.863 20.498C37.7824 20.231 37.5137 20.0762 37.3635 19.872C37.1671 19.5982 36.9993 19.305 36.8627 18.997C36.5282 18.2372 36.3716 17.3871 36.0189 16.6206C35.851 16.2531 35.5659 15.8823 35.3317 15.5562C35.0714 15.1955 34.7812 14.9301 34.5804 14.4931C34.5095 14.3382 34.4124 14.0893 34.5179 13.9295C34.5508 13.8223 34.6002 13.778 34.7057 13.7434C34.8871 13.6033 35.3929 13.7894 35.5806 13.867C36.0831 14.0763 36.502 14.2741 36.9268 14.5559C37.1293 14.6909 37.3356 14.9529 37.5828 15.0255H37.8647C38.3047 15.1259 38.7974 15.055 39.2096 15.1803C39.9365 15.401 40.5891 15.7456 41.1789 16.1198C42.9816 17.2568 44.4552 18.8768 45.4635 20.8098C45.6267 21.1212 45.6959 21.4177 45.8394 21.7476C46.1279 22.4134 46.4903 23.0989 46.7772 23.7499C47.0641 24.4008 47.3425 25.0551 47.7462 25.5956C47.9589 25.8791 48.7811 26.0305 49.1536 26.1887C49.4156 26.2992 49.8442 26.4144 50.0914 26.5646C50.566 26.8498 51.0242 27.189 51.4693 27.5024C51.6899 27.6606 52.3725 28.0036 52.4071 28.285L52.405 28.2854ZM38.4253 16.3708C38.2361 16.3678 38.0473 16.3888 37.8634 16.4333V16.4645H37.8946C38.0034 16.6902 38.1962 16.8353 38.3312 17.0281L38.6443 17.6841L38.6755 17.6546C38.87 17.5179 38.9573 17.2985 38.9573 16.9657C38.8784 16.8834 38.8683 16.7813 38.8008 16.6839C38.7118 16.5535 38.5392 16.4814 38.4253 16.3708Z" fill={color[0]} />
                </g>
                <defs>
                <clipPath id="clip0_343_20">
                <rect width="54" height="54" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    );
}

export default MySqlIcon;