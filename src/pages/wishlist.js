import ProductsList from "@/components/product/ProductList";
import { Stack } from "@mui/material";
import {
    useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import CategoryTitleBackButton from '@/components/category/CategoryTitleBackButton'
const WishList = () => {

    return (
        <>
            <Stack>
                <CategoryTitleBackButton title = "Wishlist"/>
                <ProductsList />
            </Stack>
        </>
    )
}

export default WishList;