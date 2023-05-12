import React from 'react'
import { useFormik } from 'formik'
import { validationSchema } from './schema';

const Form = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        cpassword: '',
    };

    const { values, errors, handleBlur, handleSubmit, handleChange, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values, action) => {

            console.log(values);
            action.resetForm();

        },

    });

    return (
        <div className='container mt-5'>
            <h1 className='text-center'>Formik & Yup</h1>
            <div className='row mt-5'>
                <form className='bg-light p-5' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="username" className="form-label">User Name</label>
                        <input type="text" name='username' autoComplete='off' className="form-control" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
                        {errors.username && touched.username ? <p style={{ color: 'red' }}>{errors.username}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" name='email' autoComplete='off' className="form-control" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        {errors.email && touched.email ? <p style={{ color: 'red' }}>{errors.email}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" name='password' autoComplete='off' className="form-control" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        {errors.password && touched.password ? <p style={{ color: 'red' }}>{errors.password}</p> : null}
                    </div>
                    <div className="mb-3">
                        <label for="cpassword" className="form-label">C Password</label>
                        <input type="password" name='cpassword' autoComplete='off' className="form-control" id="cpassword" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
                        {errors.cpassword && touched.cpassword ? <p style={{ color: 'red' }}>{errors.cpassword}</p> : null}
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>


    )
}

export default Form
