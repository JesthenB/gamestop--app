import React from "react";
import "../styles/header.css";

export default function HeaderNavBar() {
  return (
    <>
      <div className="headerNavBar">
        <div className="gray-header">
          <h1 className="gray-text">Free 1-3 Day Shipping Over $79</h1> <br />
        </div>

        <div className="gradient-header">
          <h1 className="gradient-text">
            Get $70 In Value* Just For Signing Up <br />
            Welcome to the all-new GameStop Pro!
          </h1>
        </div>

        <div className="white-header">
            <div className ="menu" >
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            </div>
          <img
            class="nav-logo"
            src="/gamestop-logo.svg"
            alt="GameStop Homepage"
          />
          <form>
            <input
              className="searchbox"
              type="search"
              placeholder="Search games, consoles & more"
            ></input>
          </form>
          <div className="trade-in">
            <span></span>
            <span>Trade In</span>
          </div>
          <div className="gamestop-pro">
            <span></span>
            <span>GameStop Pro</span>
          </div>
          <div className="sign-in">
            <span></span>
            <span>Sign in</span>
          </div>
          <div className="shopping-cart">
            <span><img src="/gamestop-pro-logo"/></span>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
