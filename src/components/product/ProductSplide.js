import React from 'react'
import ProductCard from './ProductCard'
import { Stack } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

function ProductSplide() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Stack >
      <Splide options={{
         perPage: 4,
        // fixedWidth: 220,
        // fixedHeight: 310,
        gap: 25,
        pagination: false,
        drag: 'free',
      
        // gap : '5rem',
        breakpoints : {
          640 : {
            fixedWidth: 160,
            // fixedHeight:  250,
            arrows : false,
            gap : 15
          },
          1024 : {
            fixedWidth: 250,
            // fixedHeight:  310,
            arrows : false,
            gap : 15
          }
        }

      }}>
        {
          data.map((ele) => {
            return (
              <SplideSlide>
                < ProductCard />
              </SplideSlide>

            )
          }

          )
        }
      </Splide>
    </Stack>
  )
}

export default ProductSplide;