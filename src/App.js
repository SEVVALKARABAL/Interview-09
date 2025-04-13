import React, { useEffect, useState } from "react";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  // KODUNUZ BURAYA GELECEK
  const [scale, setScale] = useState(1);
  const [isGrowing, setIsGrowing] = useState(true);
  const [buttonText, setButtonText] = useState("Küçült");

  const minScale = 1;
  const maxScale = 2;
  const scaleStep = 0.01;

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setScale((prevScale) => {
        if (isGrowing) {
          if (prevScale >= maxScale) {
            return maxScale;
          }
          return prevScale + scaleStep;
        } else {
          if (prevScale <= minScale) {
            return minScale;
          }
          return prevScale - scaleStep;
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isGrowing]);

  const handleClick = () => {
    setIsGrowing(!isGrowing);
    setButtonText(isGrowing ? "Büyüt" : "Küçült");
  };

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          transform: `scale(${scale})`,
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          fontWeight: "bold",
          transition: "transform 0.1s, background-color 0.3s",
          "&:hover": {
            backgroundColor: "#45a049",
          },
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default App;
