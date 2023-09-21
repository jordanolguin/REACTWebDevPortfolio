import { useEffect } from "react";
import PortfolioContainer from "./components/PortfolioContainer.js";
import Granim from "granim";

export default function App() {
  useEffect(() => {
    const granimInstance = new Granim({
      element: "#canvas-basic",
      name: "basic-gradient",
      direction: "diagonal",
      opacity: [1, 1],
      states: {
        "default-state": {
          gradients: [
            ["#000", "#212529"],
            ["#212529", "#000"],
            ["#343a40", "#212529"],
            ["#212529", "#343a40"],
            ["#495057", "#6c757d"],
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
