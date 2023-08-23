import { useEffect } from "react";
import PortfolioContainer from "./components/PortfolioContainer.js";
import Granim from "granim";

export default function App() {
  useEffect(() => {
    const granimInstance = new Granim({
      element: "#canvas-basic",
      direction: "custom",
      customDirection: {
        x0: "40%",
        y0: "10px",
        x1: "60%",
        y1: "50%",
      },
      isPausedWhenNotInView: false,
      states: {
        "default-state": {
          gradients: [
            ["#212529", "#343a40"],
            ["#495057", "#6c757d"],
            ["#adb5bd", "#ced4da"],
          ],
          transitionSpeed: 4000,
        },
      },
    });
    return () => {
      granimInstance.destroy();
    };
  }, []);
  return (
    <div>
      <PortfolioContainer />
    </div>
  );
}
