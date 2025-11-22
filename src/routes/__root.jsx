import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../contexts";
// import ErrorBoundary from "../ErrorBoundary";

// function ErrorBoundaryRoot() {
//   return (
//     <ErrorBoundary>
//       <Root />
//     </ErrorBoundary>
//   );
// }

function Root() {
  const cartHook = useState([]);
  return (
    <>
      <CartContext.Provider value={cartHook}>
        <div>
          <Header />
          <Outlet />
          <PizzaOfTheDay />
        </div>
      </CartContext.Provider>
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export const Route = createRootRoute({
  component: Root,
});
