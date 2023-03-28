import StoreFilter from './StoreFilter'
import { Stack } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import {
    useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const ChipsSplide = () => {

    const chips = [
        { name: 'All Product' },
        { name: 'Fruit' },
        { name: 'Vegetables' },
        { name: 'Home Product' },
        { name: 'Fruit' },
        { name: 'Vegetables' },
        { name: 'All Product' },
        { name: 'Fruit' },
        { name: 'Vegetables' }
    ]

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (

        <Stack style={!isMobile ? { width: '70%', margin: 'auto',padding : '25px' } : { width: '100%' ,padding : '25px'}}>
            <Splide options={{
                perPage: 6,
                gap: 15,
                pagination: false,
                drag: 'free',
                arrows: false,
                breakpoints: {
                    640: {
                        perPage: 3, gap: 10

                    },
                    1024: {
                        perPage: 5,
                        gap: 10

                    }
                }


            }}>
                {
                    chips.map((ele) => {
                        return (
                            <SplideSlide>
                                < StoreFilter name={ele.name} />
                            </SplideSlide>

                        )
                    }

                    )
                }
            </Splide>
        </Stack>
    )
}

export default ChipsSplide;