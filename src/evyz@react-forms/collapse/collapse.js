import React, { useRef, useState } from "react";
import "./collapse.css";

const Collapse = ({ children, label }) => {
  const [isActive, setIsActive] = useState(false);

  const childrenRef = useRef();

  return (
    <div
      className={`system_collapse ${isActive ? "" : "disabled"}`}
      style={{
        height: isActive ? 40 + childrenRef?.current?.clientHeight : 40,
      }}
    >
      <button onClick={() => setIsActive(!isActive)}>{label}
        <div className={isActive ? "icon disabled": 'icon'}>
        <svg width="100%" height="100%" style={{maxWidth:'100%',maxHeight:'100%'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.9201 15.05L13.4001 8.53001C12.6301 7.76001 11.3701 7.76001 10.6001 8.53001L4.08008 15.05" stroke={isActive ? "var(--main-collapse-label-color)":'var(--main-collapse-label-active)' } stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </div>
      </button>
      <div ref={childrenRef}>{children}</div>
    </div>
  );
};
export default Collapse;
