import { useState } from "react";
import { useDataContext } from "../Fetching/DataContext";

import './UserAuthentication.css'

const UserAuthentication = () => {
    const { isDialogOpen, openDialog, closeDialog } = useDataContext();

    console.log("isDialogOpen", isDialogOpen);

    const handleFormClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {isDialogOpen && (
                <div onClick={closeDialog} className="modal-container">
                    <div onClick={handleFormClick} className="m-auto w-[500px]  h-[500px] bg-yellow-300">
                        Log In
                    </div>
                </div>
            )}

        </>
    );
};

export default UserAuthentication;
