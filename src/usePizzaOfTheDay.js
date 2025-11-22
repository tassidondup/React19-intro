import { useState, useEffect, useDebugValue } from "react";

export const usePizzaOftheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  useDebugValue(pizzaOfTheDay ? pizzaOfTheDay.name : "Loading...");

  const fetchPizzaOfTheDay = async () => {
    const res = await fetch("/api/pizza-of-the-day");
    const data = await res.json();
    setPizzaOfTheDay(data);
  };

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
