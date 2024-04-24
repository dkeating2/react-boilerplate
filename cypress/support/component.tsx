// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/react18";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
import { setupStore } from "../../src/store/store";
import { Route, Routes, MemoryRouter } from "react-router-dom";
import routes from "../../src/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

Cypress.Commands.add("mount", (component, options = {}) => {
  const { reducerState = {}, route = "/test", ...mountOptions } = options;
  const store = setupStore(reducerState);
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
  const wrapped = <Wrapper>{component}</Wrapper>;
  return mount(wrapped, mountOptions);
});

// Example use:
// cy.mount(<MyComponent />)
