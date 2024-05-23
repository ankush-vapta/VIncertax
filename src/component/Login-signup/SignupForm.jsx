import React from 'react';
import { useFormik } from 'formik';
import './signup.css';
import { Link } from 'react-router-dom';




export const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })


    return (
        <>
            <div className="signup-form-container">
                <div className='form'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="signup-form-heading" >
                            <p>Signup</p>
                        </div>
                        <div className='input-field display-flex'>
                            <div className='input-field-inner-child display-flex'>
                                <label className='label' for="myInput">Full name</label>
                                <div>
                                    <input
                                        className='form-input'
                                        placeholder='Your full name/Email/password'
                                        id="myInput"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </div>
                            </div>

                            <div className='input-field-inner-child'>
                                <label className='label' for="myInput">Email</label>
                                <div>
                                    <input
                                        className='form-input'
                                        placeholder='Your full name/Email/password'
                                        id="myInput"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </div>
                            </div>
                            <div className='input-field-inner-child'>
                                <label className='label' for="myInput">Password</label>
                                <div>
                                    <input
                                        className='form-input'
                                        placeholder='Your full name/Email/password'
                                        id="myInput"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </div>

                            </div>
                            <div className='password-checkbox display-flex' >
                                <p className='password-must-contain'>Your password must contain</p>
                                <div className='password-checkbox-input display-flex' >
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> At least one capital letter</label>
                                </div>
                                <div className='password-checkbox-input'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> At least one lowercase letter</label>
                                </div>
                                <div className='password-checkbox-input'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> At least one number</label>
                                </div>
                                <div className='password-checkbox-input'>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> Password must be 8-20 characters long.</label>
                                </div>
                            </div>
                        </div>

                        <div className='form-submit-checkbox'>
                            <p> I hereby consent to the <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a></p>
                            <button className='create-account-button'>
                                Create account
                            </button>
                        </div>
                    </form >
                </div>
                <div className='login-using-google'>
                    <p >OR</p>
                </div>
                <div>
                    <button className='continue-with-google'>
                        Continue with Google
                    </button>
                </div>
                <div>
                    <p>Already have an account?<span>&nbsp;
                        <Link to="/documents" >Log in</Link>
                    </span></p>
                </div>
            </div>
        </>
    )
}


