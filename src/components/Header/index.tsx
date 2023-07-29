import CollapseMenu from "../CollapseMenu";
import "./style.css";
import Menu from "../Menu";

export default () => {
  return (
    <header>
      <img src="/assets/images/logo.svg" alt="logo" />

      {/* Mobile */}
      <div className="menu__mobile">
        <CollapseMenu />
      </div>


      {/* <button className="menu__mobile">
        <img src="/assets/images/icon-menu.svg" alt="menu" />
      </button> */}

      {/* Desktop */}

      <div className="menu__desktop">
        <Menu />
      </div>
    </header>
  );
};
