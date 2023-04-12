import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { ContactUSSchema, initialValues } from "./__formsAttr";
import style from "../../style/contactus.module.css";

const ContactUs = () => {
  const [list, setList] = useState([]);

  return (
    <div className={style.contactusPage}>
      {list.length > 0 ? <>
        <div className={style.displayList}>
      {list.length > 0 &&
        list.map((item, index) => (
          <>
            <div className={style.displayItem}>{`${index + 1} : Email:${item.email} /Username:${item.username} /Phone : ${item.phonenumber} `}</div>
            <br />
          </>
        ))}
      </div>
      </> :null  }
     
      <Formik
        initialValues={initialValues}
        validationSchema={ContactUSSchema}
        onSubmit={(values) => {
          setList([...list, values]);
        }}
      >
        {({ errors, touched }) => (
          <Form className={style.form}>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="email"
              id="email"
              className={errors.email && touched.email ? style.input_error : ""}
            />
            {errors.email && touched.email ? (
              <div className={style.errorMessage}>{errors.email}</div>
            ) : null}
            <label htmlFor="username">Username</label>
            <Field
              name="username"
              id="username"
              className={
                errors.username && touched.username ? style.input_error : ""
              }
            />
            {errors.username && touched.username ? (
              <div className={style.errorMessage}>{errors.username}</div>
            ) : null}
            <label htmlFor="phone">Phone Number</label>
            <Field
              name="phonenumber"
              id="phone"
              className={
                errors.phonenumber && touched.phonenumber
                  ? style.input_error
                  : ""
              }
            />
            {errors.phonenumber && touched.phonenumber ? (
              <div className={style.errorMessage}>{errors.phonenumber}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
