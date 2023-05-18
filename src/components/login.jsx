import React, { useState } from "react";
import '../CSS/signin.css';
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase.js";
// import "../CSS/login.css";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <>
    <div className="bg">
      <div className="login-form">
        <label>Email Id</label>
        <input
          type="mail"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <label>Password</label>
        <input
          type="number"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <button
          type="submit"
          disabled={submitButtonDisabled}
          onClick={handleSubmission}
        >
          Login
        </button>
        <b>{errorMsg}</b>
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        {/* <span class="psw">
          Forgot password?<a href="#"></a>
        </span> */}
        <span style={{ color: "blue" }}>
          Do not have an Account?
          <Link to="/signin" style={{ color: "blue" }}>
            Sign in
          </Link>
        </span>
      </div>
      </div>
    </>
  );
}
export default Login;
