import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';

const Header = () => {
 
  const auth = useAuth();  //To get if the User is LoggedIn or not.
  return (
    <AppBar 
        sx={{ bgcolor: "transparent", position: "static", boxShadow: "none"  }}
    >
        <Toolbar sx={{ display: "flex" }}> 
          <Logo />
          <div>
            {auth?.isLoggedIn ? (
              <>
              <NavigationLink bg='#00fffc' to='/chat' text="Go to chat" textColor='black' />
              <NavigationLink bg='#51358f' textColor='white' to='/' text='logout' onClick={auth.logOut} />
              </>
              ) : (
                <>
                <NavigationLink bg='#00fffc' to="/login" text='Login' textColor='black' />
                <NavigationLink bg='#51358f' textColor='white' to="/signup" text='signup'/>
                </>
              )}

          </div>
        </Toolbar>
    </AppBar>
  );
};

export default Header