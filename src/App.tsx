import React, { useState, useEffect } from "react";

const RandomGradientBackground: React.FC = () => {
  const [backgroundGradient, setBackgroundGradient] = useState<string>(
    "linear-gradient(0deg, #ffffff, #ffffff)"
  );

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = () => {
    const randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    const randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
    const randomAngle = Math.floor(Math.random() * 361);
    const gradient = `linear-gradient(${randomAngle}deg, ${randomColor1}, ${randomColor2})`;
    setBackgroundGradient(gradient);
  };

  const copyGradientToClipboard = () => {
    try {
      navigator.clipboard.writeText(`background: ${backgroundGradient}`);
    } catch (err) {
      alert("Failed to copy gradient CSS to clipboard.");
    }
  };

  return (
    <main
      style={{
        background: backgroundGradient,
      }}
    >
      <div>
        <button className="button " onClick={generateRandomColor}>
          Change Background Gradient
        </button>
        <button
          className="button button-secondary"
          onClick={copyGradientToClipboard}
          style={{ marginLeft: "10px" }}
        >
          Copy Gradient CSS
        </button>
      </div>
    </main>
  );
};

export default RandomGradientBackground;
