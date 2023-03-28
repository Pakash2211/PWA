import React from 'react'
import StoreCard from './StoreCard'
import { Stack } from "@mui/material";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

function StoreSplide() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Stack >
    {/* <Stack style = {{maxWidth : 1024,margin : 'auto',padding : '15px'}}> */}
      <Splide options={{
         perPage: 4,
        // fixedWidth: 220,
        fixedHeight: 285,
        gap: 25,
        pagination: false,
        drag: 'free',
        arrows : true,
        // gap : '5rem',
        breakpoints : {
          640 : {
            fixedWidth: 160,
            fixedHeight: 240,
            arrows : false,
            gap : 15
          },
          1024 : {
            fixedWidth: 250,
            fixedHeight: 310,
            arrows : false,
            gap : 15
          }
        }

      }}>
        {
          data.map((ele) => {
            return (
              <SplideSlide>
                < StoreCard />
              </SplideSlide>

            )
          }

          )
        }
      </Splide>
    </Stack>
  )
}

export default StoreSplide;