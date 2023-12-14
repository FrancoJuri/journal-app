import { useSelector } from 'react-redux';
import { Drawer, Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from "@mui/material";
import SidebarItem from './SidebarItem';

const Sidebar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

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
                        notes.map( note => (
                            <SidebarItem key={note.id} {...note} />
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}

export default Sidebar;