import React from "react";

const Terminal = () => {
    return (
        <div className='container grid-col-12 flex flex-col p-2 basis-1/2'>
            <div className='flex flex-row grid-col-12 gap-1.5 bg-terminal-bg-1 p-2 rounded-t-lg'>
                <div className="bg-terminal-red rounded-full p-1.5"></div>
                <div className="bg-terminal-yellow rounded-full p-1.5"></div>
                <div className="bg-terminal-green rounded-full p-1.5"></div>
            </div>
            <div className='grid-col-12 p-2 bg-terminal-bg-2 h-5/6 rounded-b-lg text-white'>
                <span>nandkadivar ~</span>
            </div>
        </div>
    );
}

export default Terminal;