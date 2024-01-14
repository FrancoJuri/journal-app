import { Grid, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";


const Footer = ({ styles, linkColor }) => {
    return (
        <Grid container component='footer' className="footer" style={styles}>
            <Typography variant="h6" component='h3'>
                Sitio web creado por <Link component={RouterLink} to='https://francojuri.com' target='_blank' color={linkColor}>Franco Juri</Link>
            </Typography>
        </Grid>
    )
}

export default Footer