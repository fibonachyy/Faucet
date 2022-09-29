import React from "react";
import "./defaultLayout.module.scss";
import Navbar from "./NavBar";
interface Props {
  children: React.ReactNode;
}
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
