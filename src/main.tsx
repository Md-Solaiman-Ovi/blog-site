import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import CategoryPage from "./components/pages/CategoryPage.tsx";
import { Provider } from "react-redux";
import store from "./appStore/store.ts";
import SingleDetailsPage from "./components/pages/SingleDetailsPage.tsx";
import TagPage from "./components/pages/TagPage.tsx";
import SignInSignUpPage from "./components/pages/SignInSignUpPage.tsx";
import UserProfile from "./components/account/UserProfile.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import AdminBlogs from "./components/dashboard/AdminBlogs.tsx";
import AdminCategories from "./components/dashboard/AdminCategories.tsx";
import AdminTags from "./components/dashboard/AdminTags.tsx";
import AdminUsers from "./components/dashboard/AdminUsers.tsx";
// import Login from "./components/account/Login.tsx";

const val = localStorage.getItem("user");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: val ? <Navigate to="/" /> : <Navigate to="/signin-signup-page" />,
  },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },

  {
    path: "/signin-signup-page",
    element: val ? <Navigate to={"/"} /> : <SignInSignUpPage />,
  },
  {
    path: "/user-profile",
    element: val ? <UserProfile /> : <Navigate to="/signin-signup-page" />,
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
  {
    path: "/signin-signup-page",
    element: <SignInSignUpPage />,
  },

  {
    path: "/admin-categories",
    element: <AdminCategories />,
  },
  {
    path: "/admin-tags",
    element: <AdminTags />,
  },
  {
    path: "/admin-blogs",
    element: <AdminBlogs />,
  },
  {
    path: "/admin-users",
    element: <AdminUsers />,
  },

  {
    path: "/admin-dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
