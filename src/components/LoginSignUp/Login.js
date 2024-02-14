import React, { useState } from "react";
import SignUp from "./SignUp";
import "./Login.css";

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleModalOpen = () => {
    onClose(!modalOpen);
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  const handleSignUp = () => {
    setSignUpModalOpen(!signUpModalOpen);
  };

  const handleLogin = async () => {
    const projectid = "wan6hnsnhwfn"
    try {
      const response = await fetch("https://academics.newtonschool.co/api/v1/bookingportals/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: projectid
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: 'bookingportals'
        })
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("name",data.data.name);
        console.log(data);
        onClose(!modalOpen);
      } else {
        console.error("Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div onClick={handleModalOpen} className="Login_Parent">
      <div onClick={handleChildClick} className="Login_child">
        <div className="Login_child_img_div">
          <img
            className="Login_child_img"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_header_assets/loginPersuassionRoad.webp"
            alt="Login"
          />
        </div>
        <div className="Login_child_login_div">
          <div className="Login_child_login">
            <button className="Login_child_login_lgnbtn">LOGIN</button>
            <button onClick={handleSignUp} className="Login_child_login_signup_btn">SIGNUP</button>
          </div>
          <div className="Login_child_logindetail_div">
            <label style={{ marginTop: "40px" }}>Email</label>
            <input
              className="Login_comp_email_pass"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label style={{ marginTop: "40px" }}>Password</label>
            <input
              className="Login_comp_email_pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleLogin} className="Login_comp_btn">
            Login
          </button>
          <p style={{ marginTop: "100px", fontSize: "11px" }}>
            By proceeding, you agree to MakeMyTrip's{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>,{" "}
            <span style={{ color: "blue" }}>User Agreement</span> and{" "}
            <span style={{ color: "blue" }}>T&Cs</span>
          </p>
        </div>
      </div>
      {signUpModalOpen && <SignUp onClose={handleSignUp} />}
    </div>
  );
}

export default Login;
