import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formSchema = Yup.object().shape( {
  Name: Yup.string().required( 'Required field' ),
  Email: Yup.string()
    .email( 'Invalid E-mail address' )
    .required( 'Required field' ),
  Phone: Yup.string()
    .matches( phoneRegExp, 'Phone nmuber is invalid' )
    .required( 'Required field' ),
  Message: Yup.string().required( 'Required field' ),
} )

export const ContactForm = () => {

  /* Server State Handling */
  const [serverState, setServerState] = useState()
  const handleServerResponse = ( ok, msg ) => {
    setServerState( { ok, msg } )
  }
  const handleOnSubmit = ( values, actions ) => {
    axios( {
      method: 'POST',
      url: 'https://formspree.io/f/xoqylwno',
      data: values,
    } )
      .then( response => {
        actions.setSubmitting( false )
        actions.resetForm()
        handleServerResponse(
          true,
          'Thank you, I will get back to you shortly!'
        )
      } )
      .catch( error => {
        actions.setSubmitting( false )
        handleServerResponse( false, error.response.data.error )
      } )
  }
  return (
    <>
      <Formik
        initialValues={{
          Name: '',
          Email: '',
          Phone: '',
          Message: '',
        }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {( { isSubmitting } ) => (
          <Form className="form" id="fs-frm" noValidate>
            <Field
              id="Name"
              type="text"
              name="Name"
              placeholder="What's your name?"
            />
            <ErrorMessage
              name="Name"
              className="errorMsg"
              component="p"
            />

            <Field
              id="Phone"
              type="phone"
              name="Phone"
              placeholder="Your phone number"
            />
            <ErrorMessage name="Phone" className="errorMsg" component="p" />

            <Field id="Email" type="email" name="Email" placeholder="E-mail" />
            <ErrorMessage name="Email" className="errorMsg" component="p" />

            <Field
              id="Message"
              name="Message"
              component="textarea"
              placeholder="Share with me your idea in here.."
            />
            <ErrorMessage
              name="Message"
              className="errorMsg"
              component="p"
            />

            <button type="submit" disabled={isSubmitting}>
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

      <style jsx>
        {`
          .form {
          width: 100vw;
          background:red;
      }

        input,
        textarea {
        width: calc(100vw - 60px);
        padding: 10px 20px;
        margin: 10px auto;
        background: none;
        border: none;
        border: 1px solid #fff0f5;
        border-radius: 5px;
        font-size: 14px;
        line-height: 1.6;
        color: #444;
        font-weight: 300;
      }

        button {
          cursor: pointer;
        margin: 10px auto;
        width: 300px;
        border: 2px solid:#ff286e;
        background-color: #ff286e;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
        font-size: 1.1rem;
        box-shadow: 3px 10px 10px 0px rgba(93, 110, 139, 0.4);
        transition: 0.7s;
      }

        button:hover {
          box - shadow: 0 15px 30px 0 rgba(38, 59, 94, 0.4);
      }

        @media (max-width: 500px) {
          button {
          width: 100%;
        }
      }

        .errorMsg {
          color: #ff286e;
      } 
      
        `}
      </style>
    </>
  );
};