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
import CreateUserForm from "./components/dashboardForm/CreateUserForm.tsx";
import CreateBlogForm from "./components/dashboardForm/CreateBlogForm.tsx";
import CreateCategoryForm from "./components/dashboardForm/CreateCategoryForm.tsx";
import CreateTagForm from "./components/dashboardForm/CreateTagForm.tsx";
import TagUpdateForm from "./components/dashUpdateForm/TagUpdateForm.tsx";
import CategoryUpdateForm from "./components/dashUpdateForm/CategoryUpdateForm.tsx";
import UserUpdateForm from "./components/dashUpdateForm/UserUpdateForm.tsx";
import BlogUpdateForm from "./components/dashUpdateForm/BlogUpdateForm.tsx";
import AdminLayout from "./components/custom-components/AdminLayout.tsx";
import Home from "./components/pages/Home.tsx";
// import Login from "./components/account/Login.tsx";

const val = localStorage.getItem("user");

const router = createBrowserRouter([
  {
    path: "/signin-signup-page",
    element: !val ? <SignInSignUpPage /> : <Navigate to={"/admin-dashboard"} />,
  },
  {
    path: "/",

    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      // {
      //   path: "/user-profile",
      //   element: <UserProfile />,
      // },
      {
        path: "/user-profile",
        element: val ? <UserProfile /> : <Navigate to="/signin-signup-page" />,
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
    ],
  },
  {
    path: "/signin-signup-page",
    element: val ? (
      <Navigate to="/admin-dashboard" />
    ) : (
      <Navigate to="/signin-signup-page" />
    ),
  },
  // {
  //   path: "/",
  //   element: val ? <Navigate to="/" /> : <Navigate to="/signin-signup-page" />,
  // },
  // {
  //   path: "/signin-signup-page",
  //   element: val ? <Navigate to={"/"} /> : <SignInSignUpPage />,
  // },

  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "admin-dashboard",
        element: <Dashboard />,
      },
      {
        path: "admin-blogs",
        element: <AdminBlogs />,
      },
      {
        path: "admin-categories",
        element: <AdminCategories />,
      },
      {
        path: "admin-tags",
        element: <AdminTags />,
      },

      {
        path: "admin-users",
        element: <AdminUsers />,
      },
      {
        path: "/admin-blogs/create-blog",
        element: <CreateBlogForm />,
      },
      {
        path: "/admin-category/create-category",
        element: <CreateCategoryForm />,
      },
      {
        path: "/admin-tags/create-tag",
        element: <CreateTagForm />,
      },
      {
        path: "/admin-users/create-user",
        element: <CreateUserForm />,
      },
      {
        path: "/update-tag-form/:id",
        element: <TagUpdateForm />,
      },
      {
        path: "/update-category-form/:id",
        element: <CategoryUpdateForm />,
      },
      {
        path: "/update-user-form/:id",
        element: <UserUpdateForm />,
      },
      {
        path: "/update-blog-form/:id",
        element: <BlogUpdateForm />,
      },
    ],
  },
]);

// {
//   path: "/",
//   element: val ? <Navigate to="/" /> : <Navigate to="/signin-signup-page" />,
// },
// {
//   path: "/signin-signup-page",
//   element: val ? <Navigate to={"/"} /> : <SignInSignUpPage />,
// },
// {
//   path: "/user-profile",
//   element: val ? <UserProfile /> : <Navigate to="/signin-signup-page" />,
// },

// {
//   path: "/user-profile",
//   element: <UserProfile />,
// },

// {
//   path: ":categorySlug/:slug",
//   element: <SingleDetailsPage />,
// },
// {
//   path: "tag/:tagSlug",
//   element: <TagPage />,
// },

// {
//   path: ":categorySlug",
//   element: <CategoryPage />,
// },
// {
//   path: "/signin-signup-page",
//   element: <SignInSignUpPage />,
// },

// {
//   path: "/admin-categories",
//   element: <AdminCategories />,
// },
// {
//   path: "/admin-tags",
//   element: <AdminTags />,
// },
// {
//   path: "/admin-blogs",
//   element: <AdminBlogs />,
// },
// {
//   path: "/admin-users",
//   element: <AdminUsers />,
// },

// {
//   path: "/admin-dashboard",
//   element: <Dashboard />,
// },
// {
//   path: "/blog-form",
//   element: <CreateBlogForm />,
// },
// {
//   path: "/category-form",
//   element: <CreateCategoryForm />,
// },
// {
//   path: "/tag-form",
//   element: <CreateTagForm />,
// },
// {
//   path: "/user-form",
//   element: <CreateUserForm />,
// },
// {
//   path: "/update-tag-form/:id",
//   element: <TagUpdateForm />,
// },
// {
//   path: "/update-category-form/:id",
//   element: <CategoryUpdateForm />,
// },
// {
//   path: "/update-user-form/:id",
//   element: <UserUpdateForm />,
// },
// {
//   path: "/update-blog-form/:id",
//   element: <BlogUpdateForm />,
// },

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
