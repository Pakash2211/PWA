import ProductCard from "../product/ProductCard";
import {Stack} from "@mui/material";
import Grid from "@material-ui/core/Grid";
import {
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const ProductsList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack sx = {isMobile ? {margin : 'auto' , width : '100%' , padding : '25px'} : {margin : 'auto' , width : '70%' , padding : '25px' }}>
    <Grid container spacing={2}>
      {data.map((ele) => {
        return (
          <Grid item xs={6} sm={4} md={3}>
            <ProductCard />
          </Grid>
        );
      })}
    </Grid>
    </Stack>
  );
}
export default ProductsList;
