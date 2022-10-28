import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddStudent");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?contact=${search}`);
    setSearch("");
  };

  return (
    <div className="header">
      <Link to="/">
        <p className="logo "> VIJAY App </p>
      </Link>
      <div className="header-right">
        <form onSubmit={handleSubmit} style={{ display: "inline" }}>
          <input
            type="text"
            className="inputfield"
            placeholder="Search Contact...."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/add">
          <p
            className={`${activeTab === "AddStudent" ? "active" : ""}`}
            onClick={() => setActiveTab("AddStudent")}
          >
            Add student
          </p>
        </Link>
        <Link to="/about">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
