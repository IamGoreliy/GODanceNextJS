'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import {MenuSvg} from '../../iconSvgComponents/svgIconComponents';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import {logout} from '../../lib/Redux/userAuthSlice';
import {createBtnHref} from './createHeaderBtnHref';
import {authStoreSelect} from '../../lib/Redux/selector';
import {useSelector} from 'react-redux';
import {RenderingUserSettingsBtn} from './renderingUserSettingsBtn';

// const userSettingsButton = ['Dashboard', 'Logout', 'login'];

const LinkCustomStyled = styled.a`
  text-decoration: none;
  color: white;
`

function ResponsiveAppBar({menuBtnNames}) {
  const [linkBtn, setLinkBtn] = useState([]);
  const {isAuthenticated} = useSelector(authStoreSelect);
  const [settingsButton, setSettingsButton] = useState([]);
  const dispatch = useDispatch();



  useEffect(() => {
    const createLink = createBtnHref(menuBtnNames);
    if (isAuthenticated || !!window.sessionStorage.getItem('auth')) {
      setSettingsButton(['Dashboard', 'Logout']);
    } else {
      setSettingsButton(['login']);
    }

    setLinkBtn(createLink);

  }, [menuBtnNames, isAuthenticated])

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    dispatch(logout())
    window.sessionStorage.removeItem('auth');
  };

  return (
    <AppBar position="static"
            sx={{backgroundColor: 'rgba(138, 43, 226, 0.4)'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuSvg />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuBtnNames.length > 0 && menuBtnNames.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/*<Typography textAlign="center">{page}</Typography>*/}
                  <Link href={`/${page}`}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuBtnNames.length && menuBtnNames.map((page, index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link
                  href={`/${linkBtn[index]}`}
                  passHref
                  legacyBehavior
                >
                  <LinkCustomStyled>{page}</LinkCustomStyled>
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <RenderingUserSettingsBtn btnNames={settingsButton}/>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// <MenuItem key={setting} onClick={handleCloseUserMenu}>
//   <Typography textAlign="center">{setting}</Typography>
// </MenuItem>