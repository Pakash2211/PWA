import ProductsList from "@/components/product/ProductList";
import { Stack } from "@mui/material";
import {
    useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import CategoryTitleBackButton from '../../components/category/CategoryTitleBackButton'
const products = () => {

    return (
        <>
            <Stack>
                <CategoryTitleBackButton title = "Product"/>
                <ProductsList />
            </Stack>
        </>
    )
}

export default products;