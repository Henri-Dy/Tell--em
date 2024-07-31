import React, { useState } from 'react';

const HomeCardActionMenu = ({ sendDellStateToParent }) => {
    const [deleteStatus, setDeleteStatus] = useState(false);

    const handleDelette = () => {
        setDeleteStatus((prevDeleteStatus) => {
            const newDeleteStatus = !prevDeleteStatus;
            sendDellStateToParent(newDeleteStatus);
            return newDeleteStatus;
        });
    };

    return (
        <div className='absolute top-0 flex justify-end w-full'>
            <div className="dropdown  dropdown-left">
                <div tabIndex={0} role="button" className="btn m-2 py-0 px-0">
                    {/* icone */}
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8M6 10h12M8 14h8M6 18h12" />
                    </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><button className='btn btn-neutral text-white'>Edit</button></li>
                    <li><button className='btn btn-accent mt-1 text-white' onClick={handleDelette}>Delete</button></li>
                </ul>
            </div>
        </div>
    );
};

export default HomeCardActionMenu;
