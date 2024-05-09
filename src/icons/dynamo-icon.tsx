import { useState } from "react";

const DynamoIcon = () => {
    const [color, setColor] = useState(['#94aab9', '#94aab9', '#94aab9', '#94aab9', '#94aab9']);
    
    return(
        <div className="flex justify-center items-center">
            <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" onMouseEnter={() => {setColor(['#5294CF', '#1F5B98', '#2D72B8', '#1A476F', '#2D72B8'])}} onMouseLeave={() => {setColor(['#94aab9', '#94aab9', '#94aab9', '#94aab9', '#94aab9'])}}>
                <path d="M22.5937 39.852H23.0734L30.9019 35.9373L31.0322 35.7531V4.50513L30.9019 4.32001L23.0734 0.408569H22.5879L22.5937 39.852Z" fill={color[0]} />
                <path d="M12.4058 39.852H11.9197L4.09757 35.9373L3.9389 35.6643L3.8584 4.66438L4.09757 4.32021L11.9195 0.408569H12.4118L12.4058 39.852Z" fill={color[1]} />
                <path d="M11.9336 0.408569H23.0661V39.852H11.9336V0.408569Z" fill={color[2]} />
                <path d="M35 19.2442L34.7354 19.1855L30.9583 18.8333L30.9021 18.8611L23.0666 18.5479H11.9334L4.09772 18.8611V12.8859L4.08956 12.8903L4.09772 12.8728L11.9334 11.0573H23.0666L30.9021 12.8728L33.7826 14.4041V13.4196L35 13.2866L34.874 13.0408L31.0195 10.2848L30.9021 10.3229L23.0666 7.89466H11.9334L4.09772 10.3227V4.32019L0 9.12044V13.3131L0.0316941 13.2901L1.21742 13.4194V14.4241L0 15.0755V19.2473L0.0316941 19.244L1.21742 19.2615V21.0125L0.194444 21.0276L0 21.0092V25.1825L1.21722 25.837V26.8532L0.0509446 26.9821L0 26.9438V31.1356L4.09772 35.9371V29.9349L11.9334 32.363H23.0666L30.9252 29.9277L31.0296 29.9736L34.8334 27.258L35 26.9876L33.7826 26.8532V25.8574L33.6231 25.7937L31.0195 27.1972L30.9252 27.3939L23.0666 29.1992V29.2013H11.9334V29.1992L4.09772 27.3864V21.3893L11.9334 21.7016V21.7092H23.0666L30.9021 21.3893L31.0806 21.4714L34.7418 21.1562L35 21.03L33.7826 21.0125V19.2615L35 19.2442Z" fill={color[3]} />
                <path d="M30.9023 29.9352V35.9373L35.0003 31.1361V26.9715L30.9261 29.9282L30.9023 29.9352ZM30.9023 27.3998L30.9261 27.3944L35.0003 25.203V21.0127L30.9023 21.3896V27.3998ZM30.9261 12.8783L30.9023 12.8731V18.8612L35.0003 19.2443V15.0559L30.9261 12.8783ZM30.9261 10.3463L35.0003 13.2865V9.12187L30.9023 4.32007V10.3226L30.9261 10.3309V10.3463Z" fill={color[4]} />
            </svg>
        </div>
    );
}

export default DynamoIcon;