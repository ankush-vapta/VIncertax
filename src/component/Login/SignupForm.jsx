import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';
import './signup.css';

const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});


export const SignupForm = () => {

    const formik = useFormik({
        initialValues: {
            email: 'foobar@example.com',
            password: 'foobar',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })


    return (
        <>
            <div className="signup-form-container">
                <div className='form'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="signup-form-heading" style={{ width: "360px", height: "32px" }}>
                            <p style={{ fontWeight: "700", fontSize: "24px", lineHeight: "32px" }}>Signup</p>
                        </div>
                        <div className='input-field'>
                            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                                <label for="myInput">My Input</label>
                                <div>
                                    <input
                                        className='form-input'
                                        id="myInput"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                                <label for="myInput">My Input</label>
                                <div>
                                    <input
                                        className='form-input'
                                        id="myInput"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                                <label for="myInput">My Input</label>
                                <div>
                                    <input
                                        className='form-input'
                                        id="myInput"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <p>Your password must contain</p>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> At least one capital letter</label>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> At least one lowercase letter</label>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> At least one number</label>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> Password must be 8-20 characters long.</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p>
                                I hereby consent to the Privacy Policy and Terms of Use
                            </p>
                        </div>

                        <button color="primary" variant="contained" fullWidth type="submit">
                            Create account
                        </button>
                    </form >
                </div>
                <div>
                    <p>OR</p>
                </div>
                <div>
                    <button color="primary" variant="contained" fullWidth type="submit">
                        Continue with Google
                    </button>
                </div>
                <div>
                    <p>Already have an account?<span>
                        <button color="primary" variant="contained" >
                            Continue with Google
                        </button>
                    </span></p>

                </div>
            </div>
        </>
    )
}

// export const InputFIeld = () => {
//     return (
//         <TextField
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//         />
//     )
// }

