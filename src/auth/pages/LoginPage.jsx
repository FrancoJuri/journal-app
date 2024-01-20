import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGoogleSignIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material";
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { clearErrorMessage } from '../../store/auth/authSlice';

const formData = {
    email: '',
    password: ''
}

const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginWithEmailAndPassword({ email, password }));
    }

    const onGoogleSignIn = () => {
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
                <Grid container>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label='Correo' 
                            type='email' 
                            placeholder="correo@gmail.com" 
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            fullWidth 
                        />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField 
                            label='Contraseña' 
                            type='password' 
                            placeholder="Contraseña"
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            fullWidth 
                        />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

                        <Grid item xs={ 12 } display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>
                                {errorMessage}
                            </Alert>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button disabled={isAuthenticating} variant="contained" fullWidth onClick={onGoogleSignIn}>
                                <Google />
                                <Typography sx={{ml: 1}}>
                                    Google
                                </Typography>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='start'>
                        <Link component={ RouterLink } color='inherit' to='/auth/register' onClick={() => {
                            dispatch(clearErrorMessage());
                        }}>
                            Crear una Cuenta
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

                
    )
}

export default LoginPage;