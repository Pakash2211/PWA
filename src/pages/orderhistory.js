import CommonPart from '@/components/header/CommonPart';
import { Stack, Container, Typography, Link } from '@mui/material';
import {
    useMediaQuery,
  } from "@material-ui/core";
  import { useTheme } from "@material-ui/core/styles";
  import HistoryCard from '../components/product/HistoryCard'
export default function OrderHistory(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
 
    return(
      <Stack>
            <CommonPart name='Order History' search='false' />
            <Stack sx= {isMobile ? {width : '100%', padding: '0px 17px'} : {width : '70%',margin : 'auto',padding: '0px 17px'}}>
              <h2>Transactions</h2>
              <Stack>
                <HistoryCard/>
                <HistoryCard/>
                <HistoryCard/>
              </Stack>
            </Stack>
      </Stack>
    )
}