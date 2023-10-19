import { useScreenSize } from "../CommonFunctions/CommonFunctions"
import { HiLocationMarker } from "react-icons/hi";
import { useDataContext } from "../Fetching/DataContext";


const NavbarLayer1 = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize < 960;

  const { isDialogOpen, openDialog, closeDialog } = useDataContext();

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex justify-center bg-yellow-300 p-[5px]">
          {isMobile && (
            <section className="text-[0.8rem] text-center	font-extrabold">
              Free Shopping on All Orders | Shop now
            </section>
          )}
          {!isMobile && (
            <section className="text-sm text-center	font-extrabold">
              Free Shopping on All Orders | Get Extra ₹100 OFF on Spent of ₹999
              Use Code: BEYOUNG100
            </section>
          )}
        </div>
        <div className="flex justify-around items-center bg-black text-white">
          <div className="flex gap-2 items-center sm4:text-[1rem]">
            <HiLocationMarker className="text-base" />
            Track order
          </div>
          <div className="flex gap-2 py-2.5 sm4:flex sm4:justify-around ">
          
            <button 
            onClick={openDialog}
              className="outline-none bg-transparent text-white sm4:text-[1rem]">
                Login
            </button>

            |
            <button 
            onClick={openDialog}
            className="outline-none bg-transparent text-white">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarLayer1;
