import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <Pizza
        name="Margherita"
        description="Classic delight with 100% real mozzarella cheese"
      />
      <Pizza
        name="Pepperoni"
        description="A classic American taste! Relish the delectable flavor of Pepperoni, topped with extra cheese"
      />
      <Pizza
        name="Veggie Supreme"
        description="A colorful mix of fresh veggies including bell peppers, olives, onions, and tomatoes"
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
