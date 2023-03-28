import React from 'react'
import StoreSplide from '../components/store/StoreSplide'
import { Stack } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import ProductSplide from '@/components/product/ProductSplide';
import StoreCard from '../components/store/StoreCard'
import HomeProduct from '../components/product/HomeProduct'
import CommonPart from '@/components/header/CommonPart';
import {
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack>
      <CommonPart name='Groceries' search='true' />
      <Stack style={{ marginTop: '50px', padding: '0px 17px' }}>
        {/* <StoreSplide />
        <ProductSplide /> */}
        {/* New Product */}
        <Stack style={!isMobile ? { width: '70%', margin: 'auto' } : { width: '100%' }}>
          <HomeProduct name="New Product" comp={<ProductSplide />} />
        </Stack>
        <Stack style={!isMobile ? { width: '70%', margin: 'auto' } : { width: '100%' }}>
          <HomeProduct name="Popular Product" comp={<ProductSplide />} />
        </Stack>
        <Stack style={!isMobile ? { width: '70%', margin: 'auto', marginTop: '10px' } : { marginTop: '10px' }}>
          <HomeProduct name="Store to follow" comp={<StoreSplide />} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home