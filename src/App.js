import React, { useState } from "react";
import Logo from "./images/logo.svg";
import Phone from "./images/phone.svg";

import * as MdIcon from "react-icons/md";
import * as BsIcon from "react-icons/bs";
import * as GrIcon from "react-icons/gr";
import * as FaIcon from "react-icons/fa";
import * as Io5Icon from "react-icons/io5";
import * as BiIcon from "react-icons/bi"
import * as RiIcon from "react-icons/ri";
import * as FiIcon from "react-icons/fi";
import { Menu } from "./Components/Menu";
import { Company } from "./Components/Company";
import { Products } from "./Components/Products";
import { Developers } from "./Components/Developers";

function App() {
  const [firstBar, setfirstBar] = useState(false);
  const [secondBar, setsecondBar] = useState(false);
  const [thirdBar, setthirdBar] = useState(false);
  const [menubarOpen, setmenubarOpen] = useState(false);

  const onMouseEnterProduct = () => setfirstBar(true);
  const onMouseLeaveProduct = () => setfirstBar(false);

  const onMouseEnterDeveloper = () => setsecondBar(true);
  const onMouseLeaveDeveloper = () => setsecondBar(false);

  const onMouseEnterCompany = () => setthirdBar(true);
  const onMouseLeaveCompany = () => setthirdBar(false);

  const onMenuClose = () => setmenubarOpen(false);


  return (
    <>
      <div className="main-body">
        <div className="nav-main"></div>
        <div className="nav-main-second"></div>
        <div className="main">
          <nav className="nav-header">
            <img src={Logo}></img>
            <div>
              <ul className="nav-links">
                <li>
                  <Products
                    onMouseEnterProduct={onMouseEnterProduct}
                    onMouseLeaveProduct={onMouseLeaveProduct}
                  />
                </li>
                <li>
                  <Developers
                    onMouseEnterDeveloper={onMouseEnterDeveloper}
                    onMouseLeaveDeveloper={onMouseLeaveDeveloper}
                  />
                </li>
                <li>
                  <Company
                    onMouseEnterCompany={onMouseEnterCompany}
                    onMouseLeaveCompany={onMouseLeaveCompany}
                  />
                </li>
              </ul>
            </div>
            <button className="button-signin" type="button">
              Sign in
            </button>
            <button
              type="button"
              className="button-menu"
              onClick={() => setmenubarOpen(true)}
            >
              <FiIcon.FiMenu />
            </button>
          </nav>
          {<Menu menubarOpen={menubarOpen} onMenuClose={onMenuClose} />}
          <div
            className={`${firstBar ? `productbar` : `productbar-hide`}`}
            onMouseLeave={onMouseLeaveProduct}
            onMouseEnter={onMouseEnterProduct}
          >
            <div className="pointer"></div>
            <div className="product-container">
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
          <div
            className={`${secondBar ? `developerbar` : `developerbar-hide`}`}
            onMouseLeave={onMouseLeaveDeveloper}
            onMouseEnter={onMouseEnterDeveloper}
          >
            <div className="pointer"></div>
            <div className="product-container">
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
          </div>
          <div
            className={`${thirdBar ? `companybar` : `companybar-hide`}`}
            onMouseLeave={onMouseLeaveCompany}
            onMouseEnter={onMouseEnterCompany}
          >
            <div className="pointer"></div>
            <div className="product-container">
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
          <div id="body-content">
            <div className="content-body-left">
              <h1>Payments infrastructure for the internet</h1>
              <p>
                Millions of companies of all size—from startups to Fortune
                500s—use Stripe's software and APIs to accept payments, send
                payouts, and manage their businesses online.
              </p>
              <button type="button">Start now</button>
            </div>
            <div className="content-body-right">
              <img src={Phone}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
