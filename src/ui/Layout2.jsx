import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout2() {
  return (
    <div>
      {" "}
      <div className="bg-navy-black-gradient px-4">
        <div className="container py-4">
          <Header />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
