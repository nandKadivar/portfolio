import React, { useEffect, useState } from "react";

const Terminal = () => {
    const [text, setText] = useState('');
    const [visibility, setVisibility] = useState('');
    const [profile, setProfile] = useState(false);
    const command = 'cat ./profile.txt'
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        console.log(text.length)    
        if(text.length < command.length) {
                setText((prevText) => prevText + command.charAt(prevText.length));
            } else {
                setProfile(true)
                setVisibility('invisible')
            }
      }, 200);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [profile, command, text]);

    return (
        <div className='h-full grid-col-12 flex flex-col'>
            <div className='flex flex-row grid-col-12 gap-1.5 bg-terminal-bg-1 p-2 rounded-t-lg'>
                <div className="bg-terminal-red rounded-full p-1.5"></div>
                <div className="bg-terminal-yellow rounded-full p-1.5"></div>
                <div className="bg-terminal-green rounded-full p-1.5"></div>
            </div>
            <div className='h-full grid-col-12 p-2 bg-terminal-bg-2 rounded-b-lg text-white'>
                <span>nandkadivar ~ <span className="command">{text}</span><span className={`blinking-cursor ${visibility}`}>|</span></span>
                <br />
                {profile && 
                    <span><span>********************** Web Developer **********************</span> <br />I am Nand Kadivar. Dynamic and resourceful software developer with over 1.5 years of startup experience, adept at developing highly maintainable IT solutions within time-bound deadlines. Proficient in React.js, Redux, TypeScript, Node.js and MongoDB, among other technologies.</span>
                }
            </div>
        </div>
    );
}

export default Terminal;