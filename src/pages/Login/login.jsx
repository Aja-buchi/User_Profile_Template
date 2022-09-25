import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";


export default function Login() {
  const formik = useFormik({
    initialValues: {
    //   firstName: "👤",
    //   lastName: "👤",
      email: "📨",
      password: "🔒",
    //   confirmpassword: "🔒",
    },
    validationSchema: Yup.object({
    //   firstName: Yup.string()
    //     .max(15, "Must be 15 characters or less")
    //     .required("Required"),
    //   lastName: Yup.string()
    //     .max(20, "Must be 20 characters or less")
    //     .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("This field is required"),
    //   confirmpassword: Yup.string().test(
    //     "passwords-match",
    //     "Passwords must match",
    //     function (value) {
    //       return this.parent.password === value;
    //     }
    //   ),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="body">
      <div className="batch"></div>
      <form onSubmit={formik.handleSubmit} className="formall">
        {/* <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div style={{ color: "red" }}>{formik.errors.firstName}</div>
        ) : null}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div style={{ color: "red" }}>{formik.errors.lastName}</div>
        ) : null} */}

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

        {/* <label htmlFor="email">Confirm password</label>
        <input
          id="password"
          name="confirmpassword"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmpassword}
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <div style={{ color: "red" }}>{formik.errors.confirmpassword}</div>
        ) : null} */}

        <button type="login" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}
