import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./components/pages/CategoryPage.tsx";
import { Provider } from "react-redux";
import store from "./appStore/store.ts";
import SingleDetailsPage from "./components/pages/SingleDetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":categorySlug/:slug",
    element: <SingleDetailsPage />,
  },

  {
    path: "/category",
    element: <CategoryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
