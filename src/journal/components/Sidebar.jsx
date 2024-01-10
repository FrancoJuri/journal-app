import { useDispatch, useSelector } from 'react-redux';
import SidebarItem from './SidebarItem';
import { handleDrawerToggle } from '../../store/ui';
import { Drawer, Box, Toolbar, Typography, Divider, List } from "@mui/material";

const Sidebar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);
    const { isMobileDrawerOpen } = useSelector(state => state.ui);

    const onToggleDrawer = () => {
        dispatch(handleDrawerToggle());
    }

    return (
        <Box
            component='nav'
            sx={{ width: {sm: drawerWidth}, flexShrink: { sm: 0 }, display: { xs: 'none', md: 'block'} }}
        >

            <Drawer
                variant="temporary"
                open={isMobileDrawerOpen}
                onClose={onToggleDrawer}
                disableScrollLock
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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

            <Drawer
                variant="permanent"
                open
                disableScrollLock
                sx={{
                    display: { xs: 'none', md: 'block'},
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