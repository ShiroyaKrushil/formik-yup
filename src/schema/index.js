import * as Yup from 'yup';

export const validationSchema = Yup.object({
    username:Yup.string().min(2).max(25).required("Please Enter a valid Username"),
    email:Yup.string().email().required('Please Enter a valid Email'),
    password:Yup.string().min(6).required('Please Enter a valid password'),
    cpassword:Yup.string().required().oneOf([Yup.ref("password"),null,"Password must match"]),
}); 
