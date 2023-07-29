import { useState } from "react";

import "./style.css";
import Menu from "../Menu";

export default () => {
  const [show, setShow] = useState(false);

  return (
    <div className="collapse-menu">
      <button className="collapse-menu__button" onClick={() => setShow(true)}>
        <img src="/assets/images/icon-menu.svg" alt="menu" />
      </button>
      {show &&
        <div className="collapse-menu__container">
            <button className="collapse-menu__container__close" onClick={() => setShow(false)}>
                <img src="/assets/images/icon-close-menu.svg" alt="close" />
            </button>
            <Menu />
        </div>
    }
    </div>
  );
};
