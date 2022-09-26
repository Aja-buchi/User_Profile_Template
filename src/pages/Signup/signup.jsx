import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './signup.css'
import { useNavigate } from "react-router-dom";

export default function Signup() {
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
      // e.preventDefault();
      try {
       const response = await fetch("https://reqres.in/api/register", {
         headers: {
           "Content-Type": "application/json",
         },
         method: "POST",
         body: JSON.stringify(values),
       });
       console.log(response);

       const {token} = await response.json();
       alert(token);

       if(response.status == 200) {
         nav('/login');
       }
       
      } catch (error) {
        
      }
    },
  });
  return (
    <div className="body">
      <div className="batch"></div>
      <form onSubmit={formik.handleSubmit} className="formall">
        <label htmlFor="email">Email</label>
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

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}

        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmpassword"
          name="confirmpassword"
          placeholder="Confirm Password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmpassword}
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <div style={{ color: "red" }}>{formik.errors.confirmpassword}</div>
        ) : null}

        <button type="submit" className="signup-btn">
          Submit
        </button>
      </form>
    </div>
  );
}