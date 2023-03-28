import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { styled } from "@mui/material/styles";
import { makeStyles } from '@material-ui/core/styles';
import { Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
const useStyles = makeStyles({
  label: {
    fontWeight: '700', // Customize the font weight
  },
});

export default function MobileNavbar() {
  const [value, setValue] = React.useState(0);

  const menuItem = [
    {
      path: "/home",
      label: "Home",
      icon: <HomeIcon />,
      
    },
    {
      path: "/search",
      label: "Browse",
      icon: <SearchIcon />,
    },
    {
      path: "/product",
      label: "Product",
      icon: <StorefrontIcon />,
    },
    {
      path: "/orderhistory",
      label: `History`,
      icon: <ArticleIcon />,
    },
    {
      path: "/login",
      label: "Profile",
      icon: <PersonIcon />,
    },
  ];

  const classes = useStyles();

  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
 
  &.Mui-selected {
    color: #33907C;
    fontSize: 8
  }
`);


const router = useRouter();

const handleChange = (event, newValue) => {
  router.push(newValue);
};

  return (
    <Stack style={{ position: 'fixed', bottom: '0px', width: '100%' ,zIndex : '1'}}>
      <Box sx={{ width: '100%'  }} >
        <BottomNavigation
          showLabels
          value={router.pathname} onChange={handleChange}
        >
          {menuItem.map((nav) => (
            <BottomNavigationAction label={nav.label} icon={nav.icon} classes={{ label: classes.label }}  value = {nav.path}/>
          ))}
        </BottomNavigation>
      </Box>
    </Stack>
  );
}