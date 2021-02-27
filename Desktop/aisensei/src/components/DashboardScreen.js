import React from "react";
import Header from "./Header";
import "./DashboardScreen.css";

const DashboardScreen = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="dashboardImg"
          src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
        />
      </div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardScreen;
