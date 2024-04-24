import routes from "../../routes.tsx";
import { RouterProvider } from "react-router-dom";
import {
  createMemoryRouter,
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store.ts";
import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const setupComponentTest = (
  component,
  { route = "/", reducerState = {} } = {},
) => {
  const store = setupStore(reducerState);
  const router = createMemoryRouter(routes, { initialEntries: [route] });
  const queryClient = new QueryClient();

  function createRoutes(routes) {
    return routes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element}>
        {route.children && createRoutes(route.children)}
      </Route>
    ));
  }
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={[route]}>
            <Routes>{createRoutes(routes)}</Routes>
            {children}
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );
  }

  return { store, ...render(component, { wrapper: Wrapper }) };
};
