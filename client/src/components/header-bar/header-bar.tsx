import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Person } from '@mui/icons-material';
import { useMutation } from '@tanstack/react-query';
import { useUserStore } from '../../services/user/user-store';
import { Link as RouterLink } from 'react-router-dom';
import  Link  from '@mui/material/Link';
import api from '../../utils/todo-boards-api';

import { TO_MAIN } from '../../utils/route-constants';
import { Paper, Stack, Typography } from '@mui/material';

export default function HeaderBar() {

  const user = useUserStore((state) => state.user);
  const { reset } = useUserStore();
  const { mutate } = useMutation({
		mutationFn: api.auth.logout,
	});

  const handleLogout = (event: React.MouseEvent<HTMLElement>) => {
    mutate()
    reset()
  };
 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link component={RouterLink} variant="h6"  underline='none' to={TO_MAIN} color="inherit" onClick={()=> console.info('click')}>
              Todo-boards
            </Link>
          </Box>
          {user && (
            <Stack direction="row" spacing={4}>
              <Stack direction="row" sx={{alignItems: 'center'}} spacing={1} >
                <Person color='inherit' fontSize='large'/>
                <Typography variant='h6'>{user.username}</Typography>
              </Stack>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleLogout}
                color="inherit"
              >
               <LogoutIcon fontSize='large'/>
            </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
