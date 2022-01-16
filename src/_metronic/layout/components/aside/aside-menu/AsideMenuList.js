/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/dashboard">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Dashboard</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/user-management",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/user-management">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
            </span>
            <span className="menu-text">User Management</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/email-management",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/email-management">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Mail.svg")}
              />
            </span>
            <span className="menu-text">Email Management</span>
          </NavLink>
        </li>

        <li
          className={`menu-item ${getMenuItemActive(
            "/notification-management",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/notification-management">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/custom/bell.svg")} />
            </span>
            <span className="menu-text">Notification Management</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/default-password",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/default-password">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
            </span>
            <span className="menu-text">Default Password</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive("/cms-pages", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/cms-pages">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/custom/cms.svg")} />
            </span>
            <span className="menu-text">CMS Pages</span>
          </NavLink>
        </li>
        {/* <li
          className={`menu-item ${getMenuItemActive("/faq-management", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/faq-management">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/custom/information.svg")}
              />
            </span>
            <span className="menu-text">FAQ Management</span>
          </NavLink>
        </li> */}
        <li
          className={`menu-item ${getMenuItemActive(
            "/project-management",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/project-management">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Files/File.svg")} />
            </span>
            <span className="menu-text">Project Management</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/ticket-support-management",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/ticket-support-management">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/custom/7.svg")} />
            </span>
            <span className="menu-text">Ticket/Support Management</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/master-management",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/master-management">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Settings-2.svg")}
              />
            </span>
            <span className="menu-text">Master Management</span>
          </NavLink>
        </li>
        <li
          className={`menu-item ${getMenuItemActive(
            "/wtRequests",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/wtRequests">
            <span className="svg-icon menu-icon">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Clipboard.svg")}
              />
            </span>
            <span className="menu-text">Work Task Requests</span>
          </NavLink>
        </li>
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
