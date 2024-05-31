import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Button, Grid, TextField, Typography, InputAdornment , IconButton } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (registerData) => {
        dispatch(register({
            id: Date.now(),
            firstname: registerData.firstName,
            lastname: registerData.lastName,
            email: registerData.email,
            number: registerData.phoneNumber,
            password: registerData.password,
        }));
        navigate('/login');
        toast.success('Successfully Signed Up!')
    };

    const registerValidationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is Required'),
        lastName: Yup.string()
            .required('Last Name is Required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        phoneNumber: Yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone number is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Grid container className='h-screen w-full'>
            <Grid item xs={12} sm={12} md={6}>
                <img src='assets/hero-img.jpg' alt='Login Logo' className='object-cover object-center w-full h-full' />
            </Grid>
            <Grid item xs={12} sm={12} md={6} container justifyContent="center" alignItems="center">
                <Grid container justifyContent='center' alignItems='center' className='w-full' padding={5}>
                    <Grid item container justifyContent="center" alignItems="center">
                        <Avatar sx={{ bgcolor: 'red', height: '50px', width: '50px' }} ><AccountCircleIcon fontSize='large' /></Avatar>
                    </Grid>
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            phoneNumber: '',
                            password: '',
                        }}
                        validationSchema={registerValidationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            handleRegister(values);
                            setSubmitting(false);
                        }}
                        validateOnChange={false}
                        validateOnBlur={true}
                    >
                        {(formik) => (
                            <Form className='w-full sm:w-2/3 lg:w-3/5'>
                                <Grid item container justifyContent='center' alignItems='center'>
                                    <Typography variant='h5' className='text-lg'>Register</Typography>
                                </Grid>
                                <TextField
                                    required
                                    name='firstName'
                                    placeholder='First Name'
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="firstName"
                                    label="First Name"
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="lastName"
                                    label="Last Name"
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    type='email'
                                    required
                                    name='email'
                                    placeholder='Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="email"
                                    label="Email"
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    name='phoneNumber'
                                    placeholder='Phone Number'
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    id="phoneNumber"
                                    label="Phone Number"
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    required
                                    name='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    helperText={formik.touched.password && formik.errors.password}
                                    id="password"
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    fullWidth
                                    margin="normal"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button
                                    sx={{
                                        backgroundColor: 'red', marginTop: 2, paddingBlock: 1.3, borderRadius: 2, textTransform: 'capitalize', letterSpacing: '0.1em', "&:hover": {
                                            backgroundColor: "red", color: '#fff',
                                        }
                                    }}
                                    type='submit'
                                    variant="contained"
                                    color="primary"
                                    disabled={formik.isSubmitting}
                                    fullWidth
                                    onClick={() => {
                                        formik.handleSubmit();
                                        formik.setTouched({
                                            firstName: true,
                                            lastName: true,
                                            email: true,
                                            phoneNumber: true,
                                            password: true,
                                        });
                                    }}
                            
                                >
                                    Register
                                </Button>
                                <Grid item container justifyContent='center' alignItems='center' marginTop={2}>
                                    <span>Already Have an Account?</span>
                                    <Link to='/login' style={{ color: 'red', fontWeight: 'bold' }}> Login</Link>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SignUpPage;
