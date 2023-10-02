import React, { Fragment } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
function Header() {
  // return (
  //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //     <div className="flex space-between h-[18px] my-[10px]">
  //       <div className="text-[13px] w-[100%]">
  //         Free Shipping on Orders over $100
  //       </div>
  //       <div className="w-[30%] flex items-center text-[13px]">
  //         <div className="flex justify-evenly w-[40%]">
  //           <FacebookIcon className="cursor-pointer" fontSize="small" />
  //           <TwitterIcon className="cursor-pointer" fontSize="small" />
  //           <InstagramIcon className="cursor-pointer" fontSize="small" />
  //         </div>
  //         <div className="w-[2px] h-[100%] bg-black"></div>
  //         <div className="flex justify-evenly w-[55%]">
  //           <PersonIcon className="cursor-pointer" fontSize="small" />
  //           <span className="cursor-pointer">Login or register</span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-[18px] my-2">
        <div className="flex items-center">
          <div className="text-sm">Free Shipping on Orders over $100</div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <FacebookIcon />
            </svg>
          </span>
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <TwitterIcon />
            </svg>
          </span>
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <InstagramIcon />
            </svg>
          </span>
          <div className="w-[2px] h-6 bg-black"></div>
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <PersonIcon />
            </svg>
          </span>
          <span className="cursor-pointer text-sm">Login or register</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
