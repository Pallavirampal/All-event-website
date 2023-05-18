import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../Firebase";
import "../CSS/login.css";

export default function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  
  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, values.email, values.pass)
    .then(async (res) => {
      setSubmitButtonDisabled(false);
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name,
      });
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
        <label>Full Name</label>
        <input
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
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
          <div style={{color:"red",height:"5px",marginBottom:"10px"}}>{errorMsg}</div>
          <button type="submit" onClick={handleSubmission} disabled={submitButtonDisabled} style={{backgroundColor:'grey'}}>
            Sign in
          </button>
          <button type="button" class="cancelbtn">
            Cancel
          </button>
          <span style={{ color: "blue" }}>
            Already have an Account?
            <Link to="/login" style={{ color: "blue" }}>
              Login
            </Link>
          </span>
      </div>
      </div>
    </>
  );
}
