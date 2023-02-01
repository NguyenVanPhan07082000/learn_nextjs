import { Box, Container, Stack, Typography, Badge, Menu, MenuItem } from '@mui/material';
import { LayoutProps } from '../../../models';
import React, { useState } from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';

import Footer from '../footer';
import Header from '../header';
import SliderBar from '../slider-bar';

export interface HomeLayoutProps {}

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export function HomeLayout({ children }: LayoutProps) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <Stack minHeight="100vh" position="relative" bgcolor={'#fff'}>
            <Stack height="100vh" sx={{ overflow: 'auto', zIndex: 1 }} position="relative">
                <CssBaseline />
                <Header
                    open={open}
                    setOpen={setOpen}
                    setMobileMoreAnchorEl={setMobileMoreAnchorEl}
                    setAnchorEl={setAnchorEl}
                />
                {renderMobileMenu}
                {renderMenu}
                <SliderBar open={open} setOpen={setOpen} />
                {/* hello */}
                {/* <Stack>
                    <Stack display={{ xs: 'none', sm: 'flex' }} sx={{ height: '80px' }}>
                        header
                    </Stack>
                </Stack> */}
                <Box component="main" flexGrow={1} sx={{ pt: { xs: 2, sm: 0 }, overflowY: 'auto' }}>
                    <Container sx={{ height: '100%' }} maxWidth={false}>
                        <Stack>
                            <Main open={open}>
                                <DrawerHeader />
                                {children}
                            </Main>
                        </Stack>
                    </Container>
                </Box>
            </Stack>
        </Stack>
    );
}
