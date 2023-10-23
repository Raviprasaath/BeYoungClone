import { useState } from "react";
import { useDataContext } from "../Fetching/DataContext";

import img from "../../assets/user-page.jpg"

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
                    <div onClick={handleFormClick} className="m-auto w-[500px]  h-[500px] bg-white">
                        <div className="relative">
                            <div>
                                <img src={img} alt="" />
                            </div>
                            <div className="absolute top-[30%] bg-white px-1 py-2 font-bold right-[1%] text-[1.1rem] w-[160px]">
                                Get Free Shipping on All Orders
                            </div>
                        </div>
                        <div className="pt-2">
                            <div className="flex justify-center items-center gap-2 flex-col">
                                <div>
                                    <input type="text" placeholder="User Name" className="outline outline-[1px] outline-gray-300 px-2 py-1" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" className="outline outline-[1px] outline-gray-300 px-2 py-1" />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" className="outline outline-[1px] outline-gray-300 px-2 py-1" />
                                </div>
                                <div>
                                    <button>
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default UserAuthentication;
