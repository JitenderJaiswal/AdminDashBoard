import React from "react";
import { links } from "../data/dummy";
import { Link, NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

function Sidebar(props) {
  return (
    <div className={style.parent}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={style.hedingText}>DataVinci</div>
      </Link>
      <div className={style.linksParent}>
        {links.map((item) => (
          <div className={style.linkParent}>
            <div classname={style.titleText}>{item.title}</div>
            {item.links.map((link) => (
              <div className={style.linkParent}>
                <NavLink
                  to={`/${link.name}`}
                  key={link.name}
                  style={{ textDecoration: "none" }}
                >
                  {link.icon}
                  <span className={style.linkName}>{link.name}</span>
                </NavLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
