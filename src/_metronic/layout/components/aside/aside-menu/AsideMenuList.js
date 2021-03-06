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
        <li
          className={`menu-item ${getMenuItemActive(
            "/property-management",
            false
          )}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/property-management">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
            </span>
            <span className="menu-text">Property Management</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}
        {/* <li
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
          className={`menu-item ${getMenuItemActive("/cms-pages", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/cms-pages">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/custom/cms.svg")} />
            </span>
            <span className="menu-text">CMS Pages</span>
          </NavLink>
        </li> */}
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
