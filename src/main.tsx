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

const val = localStorage.getItem("user");
const val2 = document.cookie;
console.log("cookie", val2);
// console.log("val ", val)
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
    element: val ? <App /> : <SignInSignUpPage />,
  },
  {
    path: "/user-profile",
    element: val ? <UserProfile /> : <SignInSignUpPage />,
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
