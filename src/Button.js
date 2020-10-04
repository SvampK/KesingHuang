import React from "react";
import "./Button.css";
class Button extends React.Component {
  render() {
    const navs = ["About", "CV", "Contact", "GitHub", "Projects"];
    return <div className="nav-container"> {navs.map(nav => <span className="nav">{nav}</span>)}</div>;
  }
}

export default Button;
