import React, { useState } from "react";
import { useFormik } from "formik";
import "./createUser.css";
import { useNavigate } from "react-router-dom";
import { createUserSuccessAlert } from "../../utils/alerts";

export default function CreateUser() {
  const initialState = {
    token: null,
    id: null,
  };

  const [state, setState] = useState(initialState);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      job: "",
    },
    
    onSubmit: async (values) => {
      try {
        const response = await fetch("https://reqres.in/api/users", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "CREATE",
          body: JSON.stringify(values),
        });

        if (response.status == 201) {
          
          createUserSuccessAlert();
        }
      } catch (error) {
          
      }
    },
  });
  return (
    <div className="body">
      <div className="batch"></div>
      <form onSubmit={formik.handleSubmit} className="formall">

        <div>
            <h1>Create User</h1>
        </div>

        <label htmlFor="text">Name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        <label htmlFor="job">Job</label>
        <input
          id="job"
          name="job"
          type="job"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.job}
        />
        
        <button type="login" className="login-btn">
          Create User
        </button>
      </form>
    </div>
  );
}
