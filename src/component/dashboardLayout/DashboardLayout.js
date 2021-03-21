import React from "react";
import {Link, useLocation} from "react-router-dom";
import { BiHomeAlt } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { HiOutlineCalendar } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { VscGraph } from "react-icons/vsc";

const navItems = [
  {
    name: "Dashboard",
    icon: <BiHomeAlt />,
    link: "/",
  },
  {
    name: "Recruitment",
    icon: <BsPeople />,
    link: "/recruitment",
  },
  {
    name: "Onboarding",
    icon: <CgFileDocument />,
    link: "/onboarding",
  },
  {
    name: "Report",
    icon: <VscGraph />,
    link: "/report",
  },
  {
    name: "Calendar",
    icon: <HiOutlineCalendar />,
    link: "/calendar",
  },
  {
    name: "Settings",
    icon: <FiSettings />,
    link: "/settings",
  },
];

export default function DashboardLayout({ children }) {
  const location = useLocation();
  console.log(location);
  return (
    <div className="dashboard-layout">
      <nav className="side-nav-bar">
        <div className="logo-container">
          <h3>Newton HR</h3>
        </div>
        <div className="nav-container">
          {navItems.map((navItem, index) => {
            return (
              <Link key={index} to={navItem.link}>
                <div  className={`nav-item ${navItem.link === location.pathname && "selected"} `}>
                  {navItem.icon}
                  <label className="item-name">{navItem.name}</label>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="image-container-small">
            image of choice
        </div>
      </nav>
      <div className="main-container">
        {children}
      </div>
    </div>
  );
}
