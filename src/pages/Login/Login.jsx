import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/User/user-actions";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../util/axiosInstance";
import "./login.css";

const Login = () => {
  const [admin, setAdmin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevAdmin) => ({
      ...prevAdmin,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!admin.username || !admin.password) {
      return;
    }

    try {
      const response = await axiosInstance.post("/login", admin);
      console.log("Login successfull", response.data);
      dispatch(
        setUserData({
          user: response.data.admin.username,
          token: response.data.admin.token,
        })
      );
      navigate("/admin");
    } catch (error) {
      console.log(error);
      //show error message
    }
  };
  return (
    <div className="login-section">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit} method="POST">
          <h2 className="login-title">Login</h2>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              username:
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className="form-input"
              value={admin.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              value={admin.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
