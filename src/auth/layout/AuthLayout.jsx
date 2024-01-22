import { Grid, Typography } from "@mui/material";
import Footer from "../../ui/components/Footer";

const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid 
            container
            spacing={0}
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4, display: 'grid'}}
        >

            <Grid item
                className="box-shadow"
                xs={3}
                sx={{ minWidth: {xs: 'calc(100vw - 64px)', sm: 475}, backgroundColor: 'white', padding: 3, borderRadius: 2, alignSelf: 'end', justifySelf: 'center' }}
            >
                <Typography variant="h5" component='h2' sx={{mb: 1}} textAlign='center'>
                    { title }
                </Typography>

                {children}

            </Grid>

            <Footer styles={{ color: 'white', display: 'flex', justifyContent: 'center', alignSelf: 'end' }} linkColor='#F0F0F0' />
        </Grid>
    )
}

export default AuthLayout;