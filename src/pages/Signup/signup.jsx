import React, {useState}from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './signup.css'
import { useNavigate } from "react-router-dom";
import { setId, setToken } from "../../utils/localStorage";
import { registerFailureAlert, registerSuccessAlert } from "../../utils/alerts";

export default function Signup() {

  const initialState = {
    token: null,
    id: null,
  };

  const [state, setState] = useState(initialState);

  const[hide, setHide] = useState(true)
  const[hideP, setHideP] = useState(true)

  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("This field is required"),
      confirmpassword: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          return this.parent.password === value;
        }
      ),
    }),
    onSubmit: async(values) => {
      try {
       const response = await fetch("https://reqres.in/api/register", {
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
         body: JSON.stringify(values),
       });
       
       const {token, id} = await response.json();

       if(response.status == 200) {
        setToken(token);
        setId(id);
        setState((prev) => ({ ...prev, token, id }));

        registerSuccessAlert();
         nav('/login');
       }
       
      } catch (error) {
        registerFailureAlert();
      }
    },
  });

  const showPassword = () => {
    setHide((prevState) => {
      return !prevState;
    })
  }

  const hidePassword = () => {
    setHideP((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="body">
      <div className="batch"></div>
      <form onSubmit={formik.handleSubmit} className="formall">
        <label htmlFor="email">Email</label>
        <div>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
        </div>
        <label htmlFor="password">Password</label>
        <div>
          <input
            id="password"
            name="password"
            type={hide ? "password" : "text"}
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <span>
            {hide ? (
              <button type="button" onClick={showPassword}>
                Show
              </button>
            ) : (
              <button type="button" onClick={showPassword}>
                Hide
              </button>
            )}
          </span>
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: "red" }}>{formik.errors.password}</div>
          ) : null}
        </div>
        <label htmlFor="confirmPassword">Confirm password</label>
        <div>
          <input
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm Password"
            type={hideP ? "password" : "text"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
          />
          <span>
            {hideP ? (
              <button type="button" onClick={hidePassword}>
                Show
              </button>
            ) : (
              <button type="button" onClick={hidePassword}>
                Hide
              </button>
            )}
          </span>
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div style={{ color: "red" }}>{formik.errors.confirmpassword}</div>
          ) : null}
        </div>
        <button type="submit" className="signup-btn">
          Submit
        </button>
      </form>
    </div>
  );
}