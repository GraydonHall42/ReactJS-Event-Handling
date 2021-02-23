import React from "react";

function App() {
  const [headingText, setHeadingText] = React.useState("Hello");
  const [buttonBackground, setbuttonBackground] = React.useState("White");

  function handleClick() {
    setHeadingText("submitted");
  }

  function handleMouseOver() {
    setbuttonBackground("Black");
  }

  function handleMouseOver() {
    setbuttonBackground("Black");
  }

  function handleMouseOut() {
    setbuttonBackground("White");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonBackground }}
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
