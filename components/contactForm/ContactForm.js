import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './form.module.css';
import axios from 'axios';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  email: Yup.string()
    .email('Invalid E-mail address')
    .required('Required field'),
  phone: Yup.string()
    .matches(phoneRegExp, 'phone number looks to be invalid, check it please')
    .required('Required field'),
  message: Yup.string().required('Required field'),
});

export const ContactForm = () => {
  /* Server State Handling */
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };
  const handleOnSubmit = (values, actions) => {
    axios({
      method: 'POST',
      url: process.env.contactEndPoint,
      data: values,
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          'Thank you, I will get back to you shortly!'
        );
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form} id="fs-frm" noValidate>
            <Field
              className={styles.form__field}
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name here.."
            />
            <ErrorMessage
              name="name"
              className={styles.form__error}
              component="p"
            />

            <Field
              className={styles.form__field}
              id="phone"
              type="phone"
              name="phone"
              placeholder="Your phone number here please"
            />
            <ErrorMessage
              name="phone"
              className={styles.form__error}
              component="p"
            />

            <Field
              className={styles.form__field}
              id="email"
              type="email"
              name="email"
              placeholder="here goes your E-mail"
            />
            <ErrorMessage
              name="email"
              className={styles.form__error}
              component="p"
            />

            <Field
              className={styles.form__field}
              id="message"
              name="message"
              component="textarea"
              placeholder="Share with me your idea in here.."
            />
            <ErrorMessage
              name="message"
              className={styles.form__error}
              component="p"
            />

            <button
              className={styles.button}
              type="submit"
              disabled={isSubmitting}
            >
              Send
            </button>
            {serverState && (
              <p className={!serverState.ok ? 'errorMsg' : ''}>
                {serverState.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
