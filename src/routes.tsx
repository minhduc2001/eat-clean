import React from "react";
import { PUBLIC_ROUTES } from "./lazyLoading";
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Layout from "@/layouts";

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      {props.children}
    </React.Suspense>
  );
};

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {PUBLIC_ROUTES.map((route) => (
          <Route
            path={route.path}
            key={route.path}
            element={
              <SuspenseWrapper>
                <route.component />
              </SuspenseWrapper>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default MainRoutes;
