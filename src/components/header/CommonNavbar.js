import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import { Stack } from '@mui/material';
function CommonNavbar() {


  const menuItem = [
    {
      path: "/home",
      label: "Home",

    },
    {
      path: "/search",
      label: "Browse",

    },
    {
      path: "/product",
      label: "Product",

    },
    {
      path: "/orderhistory",
      label: `Order History`,
    },
    {
      path: "/login",
      label: "Profile",

    },
  ];

  return (
    <Stack style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#33907C',
      padding: '8px',

    }}>
      <Stack sx={{
        width: '60%', 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin : 'auto'
      }}>
        {
          menuItem.map((ele) =>
            <Link href={ele.path} passHref legacyBehavior>
              <a style={{ textDecoration: 'none', color: '#FFFFFF', fontSize: '16px' }}>{ele.label}</a>
            </Link>
          )
        }
      </Stack>
    </Stack>
  );
}

export default CommonNavbar;