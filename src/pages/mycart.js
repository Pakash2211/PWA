import ProductCard from '../components/mycart/ProductCard'
import PricePart from '../components/mycart/PricePart'
import { Stack,Card } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import {
    useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import CategoryTitleBackButton from '../components/category/CategoryTitleBackButton'
const MyCart = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));



    const stylesBtn = {
        "&.MuiButton-root": {
            border: "none",
            backgroundColor: '#FFFFFF',
            //   textTransform : 'capitalize',
            color: '#4F4F4F',
            borderRadius: "0px",
            height: '48px',
             width : '100%',
            padding: '10px 80px',
            margin : 'auto',
          
        },
        //     "&.MuiButton-outlined": {
        //       color: "none",

        //     },
        //     "&.MuiButton-root:hover": {
        //         background : styles.hoverBg,
        //         color : styles.hoverTxt   
        //   }
    }

    return (
        <Stack>
             <CategoryTitleBackButton title = "Mycart"/>
             <Card sx={{ borderRadius: '0px', boxShadow: 0, width : '100%' ,  marginBottom : '15px'}}>
             <Button variant="outlined" startIcon={<AddIcon />} sx = {stylesBtn}>
                Add New Address
             </Button>
             </Card>
            <Stack sx={!isMobile ? { display: 'flex', flexDirection: 'row', justifyContent: 'space-around' } : {}}>
                <Stack>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Stack>
                <Stack style={{ marginTop: '20px' }}>
                    < PricePart />
                </Stack>
            </Stack>
        </Stack>


    )
}

export default MyCart;  