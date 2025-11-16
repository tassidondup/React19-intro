import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello from React 19"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "Mozzarella cheese, Pepperoni, Tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "Margherita Pizza",
      description: "Fresh mozzarella, Basil, Tomato sauce",
    }),
    React.createElement(Pizza, {
      name: "BBQ Chicken Pizza",
      description: "Grilled chicken, BBQ sauce, Red onions",
    }),
    React.createElement(Pizza, {
      name: "Veggie Pizza",
      description: "Bell peppers, Olives, Onions, Mushrooms",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
