import React from "react";
import style from "./navbar.module.scss";
interface Props {}
const Navbar: React.FC<Props> = () => {
  return (
    <>
      <div className={style["top-navbar"]}>
            <div className={style.container}>
                <div className={style['left-side']}>
                    <label>current block number: </label>
                    <span>16536</span>
                  </div>
                  
                  <div className={style['right-side']}>
                      <div className={style['connect-btn']}>
                          <span>Connect wallet</span>
                      </div>
                  </div>
            </div>
      </div>
    </>
  );
};

export default Navbar;
