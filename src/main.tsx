
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsPage from "./components/category/pages/single-page/SingleDetailsPage.tsx";
import CategoryPage from "./components/category/pages/CategoryPage.tsx";
import { Provider } from "react-redux";
import store from "./appStore/store.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home/category/single-details-page",
    element: <DetailsPage />,
  },
  {
    path: "/home/category/",
    element: <CategoryPage />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
