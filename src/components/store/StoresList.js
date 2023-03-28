
import StoreCard from "./StoreCard";
import {Stack} from "@mui/material";
import {Grid} from "@mui/material";

const StoresList = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Stack sx = {{margin : 'auto' , width : '100%' , padding : '25px' }} >
      <Grid container spacing={2} style={{display:"flex", overflowX: "scroll"}}>
        {data.map((ele) => {
          return (
            <Grid md={2} padding="10px">
              <StoreCard />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
export default StoresList;
