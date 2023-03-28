import { Stack, Typography } from '@mui/material';
import WishList from '../product/WishList';
import CartWidget from '../product/CartWidget';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import {
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
export default function CommonPart({name,search}) {

  const styleHed = {
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center'
  }


  const startAdornmentStyle = {
    color: '#33907C',
    marginRight: '12px',
  }


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack style={{ backgroundColor: '#33907C', padding: '15px 17px' }}>
      <Stack style={{ ...styleHed, justifyContent: 'space-between' }}>
        <Typography variant='h4' sx = {{fontWeight : '700',color : 'text.common'}}>{name}</Typography>
        {
          !isMobile && search == 'true' ? (
            <Stack style={{ width: '40%' }}>
          <InputBase
            placeholder="Search Product"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={<SearchIcon sx={startAdornmentStyle} />}
            sx={{
              padding: '6px 16px',
              borderRadius: '24px',
              backgroundColor: '#FFFFFF'
            }}

          />
        </Stack>
          ) : ('')
        }
       
        <Stack style={{ ...styleHed, justifyContent: 'space-around' }}>
          <WishList />
          <CartWidget />
        </Stack>
      </Stack>

      {
        isMobile  &&  search == 'true' ? (<Stack style={{ width: '100%', margin: '15px 0px 5px 0px' }}>
          <InputBase
            placeholder="Search Product"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={<SearchIcon sx={startAdornmentStyle} />}
            sx={{
              padding: '6px 16px',
              borderRadius: '24px',
              backgroundColor: '#FFFFFF'
            }}

          />
        </Stack>) : ('')
      }


    </Stack>
  )
}
