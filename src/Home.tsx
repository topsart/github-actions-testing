import React from "react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <NavLink to="/events">To Events</NavLink>
    </div>
  );
};
