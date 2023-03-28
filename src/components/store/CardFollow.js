import { Stack, CardMedia, Typography, CardHeader, Card } from '@mui/material';
import {
    useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
const CardFollow = () => {
    const styles = {
        disply: 'flex',
        flexDirection: 'column',
        justifyContenct: 'center',
        alignItems : 'center'
    }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Card style = {isMobile ? {width : '100%',margin : 'auto',padding : '25px'} : {width : '70%',margin : 'auto',padding : '25px'}} sx = {{boxShadow : '0'}}>
        <Stack >
                <Stack style={{ ...styles, flexDirection: 'row', alignItems: 'center' ,justifyContent : 'space-evenly'}}>
                <Stack style={styles}>
                    <Typography variant="h5">Total followers</Typography>
                    <Typography variant="h5">0</Typography>

                    
                </Stack>
                <Stack style={styles}>
                    <Typography variant="h5">Total products</Typography>
                    <Typography variant="h5">0</Typography>
                </Stack>
               </Stack> 
        </Stack >
        </Card >
    )
}
export default CardFollow;