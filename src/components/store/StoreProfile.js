import { Stack, CardMedia, Typography, CardHeader, Card, Button } from '@mui/material';
import LetterAvatar from '../avatar/LetterAvatar';
import {
    useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Chip from '@mui/material/Chip';
const StoreProfile = () => {


    const flexStyle = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    const cardStyle = {
        margin: 'auto', padding: '25px', marginBottom: '20px'
    }
    const stylesBtn = {
        "&.MuiButton-root": {
          border: "none",
          backgroundColor :'btn.secondaryBackground',
          textTransform : 'capitalize',
          color : 'btn.secondaryTxt',
          borderRadius : "24px",
          height : '25px',
          padding : '0px 30px'
        },
        "&.MuiButton-outlined": {
          color: "none",
        
        },
    //     "&.MuiButton-root:hover": {
    //         background : styles.hoverBg,
    //         color : styles.hoverTxt   
    //   }
    }
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };

    return (
        <Card style={!isMobile ? { ...cardStyle, width: '70%' } : { ...cardStyle, width: '100%' }} sx={{ boxShadow: '0' }}>
            {/* <Card> */}
            <Stack style = {{...flexStyle,justifyContent : 'space-between'}}>
                <Stack style={{ ...flexStyle }}>
                    <Stack>
                        <LetterAvatar
                            storeName='Trandly'
                            style={{
                                height: '50px',
                                width: '50px',
                                fontSize: '35px',
                                alignItems: 'center',
                                smw: "48px",
                                smh: "48px",
                                mdh: "50px",
                                mdw: "50px",
                                smf: '30px',
                                mdf: '35px'
                            }}
                        />
                    </Stack>
                    <Stack style={{ marginLeft: '20px',display : 'flex' , flexDirection : 'column', justifyContent : 'center' }}>
                        <Typography variant='h6'>Trandly Store</Typography>
                        <Typography  variant = 'h5' sx = {{  color: 'text.disabled'}}>trandly.app</Typography>
                    </Stack>
                </Stack>
                <Stack>
                    <Button size="medium"
                        variant="filled"
                        sx={stylesBtn}>Follow</Button>
                </Stack>
            </Stack>
            <Stack style={{ marginTop: '25px' }}>
                <Typography variant='subtitle1' sx={{ color: 'text.disabled' }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue nunc vel rhoncus, sed. Neque hendrerit risus ut metus ultrices ac. Dui morbi eu amet id mauris. Eget at ut. </Typography>
            </Stack>
            <Stack style = {{...flexStyle,justifyContent : 'space-evenly',width : '60%',margin : '25px auto 25px auto'}}>
            <Chip label= 'Vegetables' onDelete={handleDelete} />
            <Chip label= 'Groceries' onDelete={handleDelete} />
            <Chip label= 'Groceries' onDelete={handleDelete} />
            </Stack>
            {/* </Card> */}
        </Card>
    )
}

export default StoreProfile;