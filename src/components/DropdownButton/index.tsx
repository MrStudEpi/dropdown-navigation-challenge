import "./style.css";

import { useState } from "react";

interface DropdownButtonProps {
  icon?: any;
  label: string;
  href?: string;
  placement?: "left" | "right";
  childrens?: DropdownButtonProps[];
}

export default ({ icon, label, href, placement, childrens }: DropdownButtonProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="dropdown">
      <button
        className="dropdown__button"
        onClick={() => (href ? window.location.href = href : setShow(!show))}
      >
        {icon && <img className="dropdown__button__icon" src={icon} alt={label} />}
        <span className="dropdown__button__label">{label}</span>
        {childrens &&
          childrens.length > 0 &&
          (show ? (
            <img className="dropdown__button__arrow" src="/assets/images/icon-arrow-up.svg" alt="arrow" />
          ) : (
            <img className="dropdown__button__arrow" src="/assets/images/icon-arrow-down.svg" alt="arrow" />
          ))}
      </button>
      {childrens && show && (
        <div
            className="dropdown__content"
            style={placement === "left" ? { right: 0 } : { left: 0 }}
        >
          {childrens.map((children, index) => (
            <a className="dropdown__content__link" href={children.href} key={index}>
              {children.icon && <img
                className="dropdown__content__link__icon"
                src={`/assets/images/${children.icon}`}
                alt={children.label}
              />}
              <span>{children.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
