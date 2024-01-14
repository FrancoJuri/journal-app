import { Grid, Typography } from "@mui/material";
import Footer from "../../ui/components/Footer";

const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid 
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
        >

            <Grid item
                className="box-shadow"
                xs={3}
                sx={{width: {sm: 475}, backgroundColor: 'white', padding: 3, borderRadius: 2}}
            >
                <Typography variant="h5" component='h2' sx={{mb: 1}} textAlign='center'>
                    { title }
                </Typography>

                {children}

            </Grid>

            <Footer styles={{ color: 'white', position: 'absolute', bottom: '20px', display: 'flex', justifyContent: 'center' }} linkColor='#F0F0F0' />
        </Grid>
    )
}

export default AuthLayout;