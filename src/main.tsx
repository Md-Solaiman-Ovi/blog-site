import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryPage from "./components/pages/CategoryPage.tsx";
import { Provider } from "react-redux";
import store from "./appStore/store.ts";
import SingleDetailsPage from "./components/pages/SingleDetailsPage.tsx";
import TagPage from "./components/pages/TagPage.tsx";
import SignInSignUpPage from "./components/pages/SignInSignUpPage.tsx";
import UserProfile from "./components/account/UserProfile.tsx";
import Login from "./components/account/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin-signup-page",
    element: <SignInSignUpPage />,
  },
  {
    path: "/user-profile",
    element: <UserProfile />,
  },
  {
    path: ":categorySlug/:slug",
    element: <SingleDetailsPage />,
  },
  {
    path: "tag/:tagSlug",
    element: <TagPage />,
  },

  {
    path: ":categorySlug",
    element: <CategoryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
