import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../Pages/Login/Login";
import { Home } from "../Pages/Home/Home";

const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
