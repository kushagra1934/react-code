import React from "react";
import { About, Contact, Error, Home, Posts, PostDetail, Login } from "./pages";
import AuthProvider from "./context/AuthProvider";
//step1 - import 4 things

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import RequireAuth from "./components/RequireAuth";

//step2- create a router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="posts"
        element={
          <RequireAuth>
            <Posts />
          </RequireAuth>
        }
      />
      <Route path="posts/:id" element={<PostDetail />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
