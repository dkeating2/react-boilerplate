import Layout from "./components/Layout/Layout.tsx";
import CharacterList from "./pages/CharacterList/CharacterList.tsx";
import CharacterPage from "./pages/CharacterPage/CharacterPage.tsx";
import TriviaPage from "./pages/TriviaPage/TriviaPage.tsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/characters", element: <CharacterList /> },
      { path: "/characters/:id", element: <CharacterPage /> },
      { path: "/trivia", element: <TriviaPage /> },
    ],
  },
];
export default routes;
