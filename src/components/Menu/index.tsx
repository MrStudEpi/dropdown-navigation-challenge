import DropdownButton from "../DropdownButton";

import "./style.css";

export default () => {
  return (
    <nav className="menu__container">
      <ul className="menu__container__links">
        <li>
          <DropdownButton
            label="Features"
            childrens={[
              { icon: "icon-todo.svg", label: "Todo List", href: "#" },
              { icon: "icon-calendar.svg", label: "Calendar", href: "#" },
              { icon: "icon-reminders.svg", label: "Reminders", href: "#" },
              { icon: "icon-planning.svg", label: "Planning", href: "#" },
            ]}
            placement="left"
          />
        </li>
        <li>
          <DropdownButton
            label="Company"
            childrens={[
              { label: "History", href: "#" },
              { label: "Our Team", href: "#" },
              { label: "Blog", href: "#" },
            ]}
            placement="right"
          />
        </li>
        <li>
          <DropdownButton label="Careers" href="#" />
        </li>
        <li>
          <DropdownButton label="About" href="#" />
        </li>
      </ul>
      <ul className="menu__container__auth">
        <li className="menu__container__auth__item">
            <a id="menu__container__auth__login" >Login</a>
        </li>
        <li className="menu__container__auth__item">
          <a id="menu__container__auth__register">Register</a>
        </li>
      </ul>
    </nav>
  );
};
