import MobileNavbar from './MobileNavbar'
import CommonNavbar from './CommonNavbar'

import {
    useMediaQuery,
  } from "@material-ui/core";
  import { useTheme } from "@material-ui/core/styles";
  import { Stack} from '@mui/material';

 const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return(

        <Stack>
           {
            isMobile ? (<MobileNavbar />) : (<CommonNavbar />)
           }
        </Stack>
    )
}

export default Header;