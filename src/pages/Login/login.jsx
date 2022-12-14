import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/localStorage";
import { loginFailureAlert, loginSuccessAlert } from "../../utils/alerts";



export default function Login() {

  const initialState = {
    token: null,
    id: null,
  };

  const [state, setState] = useState(initialState);

    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: async(values) => {
      try {
        const response = await fetch("https://reqres.in/api/login", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(values),
        });

        const { token } = await response.json();

        if (response.status == 200) {
          setToken(token);
          setState((prev) => ({ ...prev, token }));

          loginSuccessAlert();
          navigate("/menu");
        }
      } catch (error) {
        loginFailureAlert();
      }
    },
  });
  return (
    <div className="body">
      <div className="batch"></div>
      <form onSubmit={formik.handleSubmit} className="formall">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}

        <label htmlFor="email">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <button type="login" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
