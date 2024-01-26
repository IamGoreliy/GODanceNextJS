import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import {useDispatch} from 'react-redux';
import {logout} from '../../lib/Redux/userAuthSlice';
import {useSelector} from 'react-redux';
import {authStoreSelect, userData} from '../../lib/Redux/selector';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const { user } = useSelector(userData);
  const router = useRouter();
  const auth = useAuth();
  const dispatch = useDispatch();


  const handleLogOut = () => {
    dispatch(logout());
    router.push('/auth/login');
  }

  // const handleSignOut = useCallback(
  //   () => {
  //     onClose?.();
  //     auth.signOut();
  //     router.push('/auth/login');
  //   },
  //   [onClose, auth, router]
  // );

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user?.name ?? 'no name'}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        <MenuItem onClick={handleLogOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
