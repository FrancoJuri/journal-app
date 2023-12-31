import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

const Navbar = ({ drawerWidth }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }

    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                width: {sm: `calc(100% - ${drawerWidth}px)`},
                ml: {sm: `${drawerWidth}px`}
            }}
        >
            <Toolbar>
                <IconButton color='inherit' sx={{ mr: 2, display: { sm: 'none'}}}>
                    <MenuOutlined />
                </IconButton>

                <Grid 
                    container 
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant='h5' noWrap component='h1'>
                        Journal App
                    </Typography>

                    <IconButton color='error' onClick={onLogout}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;