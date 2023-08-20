import { CircularProgress } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { HomeAdmin } from "../../Components/Admin/Home/HomeAdmin";
import { HomeInstructor } from "../../Components/Instructor/Home/HomeInstructor";
import { HomeUser } from "../../Components/User/Home/HomeUser";

export const Home = () => {
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.authReducer.loading);

  return (
    <div>
      Home
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          {(() => {
            if (user.userType === "admin") {
              return <HomeAdmin />;
            } else if (user.userType === "instructor") {
              return <HomeInstructor />;
            } else if (user.userType === "user") {
              return <HomeUser />;
            }
          })()}
        </>
      )}
    </div>
  );
};
