import React from "react";

import * as MdIcon from "react-icons/md";
import * as BsIcon from "react-icons/bs";
import * as GrIcon from "react-icons/gr";
import * as FaIcon from "react-icons/fa";
import * as Io5Icon from "react-icons/io5";
import * as BiIcon from "react-icons/bi";
import * as RiIcon from "react-icons/ri";
import * as IoIcon from "react-icons/io";

export const Menu = ({ menubarOpen,onMenuClose }) => {
  return (
    <div className={`${menubarOpen ? `menu-sidebar-hide menu-sidebar` : `menu-sidebar-hide`}`}>
      <div>
        <button
          type="button"
          className="menu-sidebar-close"
          onClick={onMenuClose}
        >
          <IoIcon.IoMdClose />
        </button>
        <div className="menu-side-container">
          <h2>Products</h2>
          <div>
            <a href="#">
              <MdIcon.MdPayment />
              <p>Payment</p>
            </a>
            <a href="#">
              <BsIcon.BsFillTerminalFill />
              <p>Terminal</p>
            </a>
            <a href="#">
              <GrIcon.GrConnectivity />
              <p>Connect</p>
            </a>
          </div>
        </div>
      </div>
      <div className="menu-side-container">
        <h2>Developers</h2>
        <div>
          <a href="#">
            <FaIcon.FaPlug />
            <p>Plugins</p>
          </a>
          <a href="#">
            <Io5Icon.IoLibrary />
            <p>Libraries</p>
          </a>
          <a href="#">
            <BiIcon.BiHelpCircle />
            <p>Help</p>
          </a>
          <a href="#">
            <RiIcon.RiBillFill />
            <p>Billing</p>
          </a>
        </div>
      </div>
      <div className="menu-side-container">
        <h2>Company</h2>
        <div>
          <a href="#">
            <BsIcon.BsFillInfoCircleFill className="company-about" />
            <p>About</p>
          </a>
          <a href="#">
            <BiIcon.BiSupport className="company-support" />
            <p>Customers</p>
          </a>
        </div>
      </div>
    </div>
  );
};