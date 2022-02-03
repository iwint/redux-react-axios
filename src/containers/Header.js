import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div
        className="ui container center "
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2>iWin Shopping</h2>
      </div>
    </div>
  );
};

export default Header;
