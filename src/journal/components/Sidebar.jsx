import { useSelector } from 'react-redux';
import { TurnedInNot } from "@mui/icons-material";
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";

const Sidebar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);

    return (
        <Box
            component='nav'
            sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0 } }}
        >

            <Drawer
                variant="permanent"
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
                }}
            >

                <Toolbar>
                    <Typography variant="h5" component='h2' noWrap>
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'].map( text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>

                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary={ 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda' } />
                                    </Grid>

                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}

export default Sidebar;