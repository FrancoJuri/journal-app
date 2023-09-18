import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, TextField, Typography, Button, Link, Alert } from "@mui/material";
import AuthLayout from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks';
import { clearErrorMessage } from '../../store/auth/authSlice';


const formData = {
    email: '',
    password: '',
    displayName: '',
}

const emailRe = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const formValidations = {
    email: [ (value) => value.match(emailRe), 'El Email no es válido'],
    password: [ (value) => value.length >= 8, 'La contraseña debe ser de al menos 8 caracteres'],
    displayName: [(value) => value.length > 1, 'El nombre debe tener al menos 2 caracteres']
}

const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false)

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const { 
        displayName, email, password, onInputChange,
        displayNameValid, emailValid, passwordValid, isFormValid 
    } = useForm(formData, formValidations);

    useEffect(() => {
        dispatch(clearErrorMessage());
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if(!isFormValid) return;

        dispatch(startCreatingUserWithEmailAndPassword({email, password, displayName}));
    }

    return (
        <AuthLayout title='Register'>
            <form onSubmit={onSubmit}>
                <Grid container>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='Nombre' type='text' placeholder="Tu nombre" name='displayName' value={displayName} onChange={onInputChange} error={!!displayNameValid && formSubmitted} helperText={formSubmitted ? displayNameValid : <></>} fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='Correo' type='email' placeholder="correo@gmail.com" name='email' value={email} onChange={onInputChange} error={!!emailValid && formSubmitted} helperText={formSubmitted ? emailValid : <></>} fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='Contraseña' type='password' placeholder="Contraseña" name='password' value={password} onChange={onInputChange} error={!!passwordValid && formSubmitted} helperText={formSubmitted ? passwordValid : <></>} fullWidth />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

                        <Grid item xs={ 12 } display={!!errorMessage ? '' : 'none'}>
                            <Alert severity='error'>
                                {errorMessage}
                            </Alert>
                        </Grid>

                        <Grid item xs={ 12 }>
                            <Button disabled={isCheckingAuthentication} type='submit' variant="contained" fullWidth>
                                Crear Cuenta
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' justifyContent='start'>
                        <Typography sx={{ mr: 1}}>
                            ¿Ya tienes una cuenta?
                        </Typography>
                        <Link component={ RouterLink } color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>

                
    )
}

export default RegisterPage;