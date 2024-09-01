import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required'),
});

const FormikForm = () => {
    const handleSubmit = (values) => {
        console.log('Form submitted:', values);
    };

    return (
        <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
            <div>
                <label htmlFor="username">Username:</label>
                <Field type="text" name="username" />
                <ErrorMessage name="username" component="p" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="p" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="p" />
            </div>
            <button type="submit">Register</button>
        </Form>
    );
};

export default FormikForm;