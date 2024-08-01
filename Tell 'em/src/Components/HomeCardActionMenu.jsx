import React, { useEffect, useState } from 'react';
import EditForm from './EditForm';

const HomeCardActionMenu = ({ sendDellStateToParent, sendEditInfosToChild }) => {
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [appendEdit, setAppendEdit] = useState(false);
    const [editInfos, setEditInfos] = useState([]);

    useEffect(() => {
        setEditInfos(sendEditInfosToChild);
    }, [sendEditInfosToChild]);

    const handleDelete = () => {
        setDeleteStatus((prevDeleteStatus) => {
            const newDeleteStatus = !prevDeleteStatus;
            sendDellStateToParent(newDeleteStatus);
            return newDeleteStatus;
        });
    };

    const handleAppendEdit = () => {
        setAppendEdit(true);
    };

    const onClose = () => {
        setAppendEdit(false);
    };

    return (
        <div className='absolute top-0 flex justify-end w-full'>
            <div className="dropdown dropdown-left">
                <div tabIndex={0} role="button" className="btn m-2 py-0 px-0">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8M6 10h12M8 14h8M6 18h12" />
                    </svg>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><button className='btn btn-base-300' onClick={handleAppendEdit}>Edit</button></li>
                    <li><button className='btn btn-accent mt-1 text-white' onClick={handleDelete}>Delete</button></li>
                </ul>
            </div>

            {appendEdit && <EditForm onClose={onClose} editInfos={editInfos} />}
        </div>
    );
};

export default HomeCardActionMenu;
