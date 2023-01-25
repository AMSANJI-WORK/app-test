import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AppNavbar from "../components/Navbar";
import AppNavigation from "../components/navigation/List";
export default function DefaultLayout() {
  const drawer = useSelector((state) => state.drawer.opened);
  const calculateMarginContent = useMemo(() => {
    return drawer ? "ml-[3rem]" : "m-0";
  }, [drawer]);
  return (
    <>
      <AppNavbar />
      <div className="flex min-h-screen overflow-x-auto">
        <AppNavigation />
        <div className={`${calculateMarginContent} p-3  mt-20`}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
