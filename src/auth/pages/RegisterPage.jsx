import { Link as RouterLink } from 'react-router-dom';
import { Google } from "@mui/icons-material";
import { Grid, TextField, Typography, Button, Link } from "@mui/material";
import AuthLayout from '../layout/AuthLayout';

const RegisterPage = () => {
    return (
        <AuthLayout title='Register'>
            <form>
                <Grid container>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='Nombre' type='text' placeholder="Tu nombre" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='Correo' type='email' placeholder="correo@gmail.com" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{mt: 2}}>
                        <TextField label='Contraseña' type='password' placeholder="Contraseña" fullWidth />
                    </Grid>

                    <Grid container spacing={2} sx={{mb: 2, mt: 1}}>

                        <Grid item xs={ 12 }>
                            <Button variant="contained" fullWidth>
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