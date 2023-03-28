import { Stack, CardMedia, Typography, CardHeader, Card } from '@mui/material';
import LetterAvatar from '../avatar/LetterAvatar'
import useNumber from '../../hooks/useNumber';
import LoadButton from '../button/LoadButton';
const StoreCard = () => {
    const { fCurrency } = useNumber()
    return (
        <Card sx={{  borderRadius : '10px' }}>
            <CardMedia
                component="img"
                image="https://pnptc-media.s3.amazonaws.com/images/header_photo.2e16d0ba.fill-1200x800.jpg"
                alt="Groceries"
            />
            <Stack  sx = {{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems:"center", marginBottom:"30px"}}>
                <LetterAvatar 
                    storeName='store' 
                    style={{
                        height: '70px',
                        width: '70px',
                        fontSize: '50px',
                        alignItems: 'center',
                        position: "absolute",
                        smw : "70px",
                        smh : "70px",
                        mdh : "70px",
                        mdw : "70px",
                        smf : '40px',
                        mdf : '50px'
                    }} 
            />
            </Stack>
            <Stack  sx = {{display : 'flex' , flexDirection : 'column', justifyContent : 'center',padding : '15px'}}>
                <Typography variant="h5" align='center' marginBottom='10px'>
                    Groceries Store
                </Typography>
                {/* <LoadButton name="follow" style={{fontSize: "10px", backgroundColor: "#3CB371", width:"80px", alignSelf:"center", height:'20px', color: 'white'}}>Follow</LoadButton> */}
               <Stack style = {{width : '70%' , margin : 'auto',padding : '4px'}}>
               <LoadButton styles = {{ background : 'btn.secondaryBackground' , 
                                   text : 'btn.secondaryTxt' , 
                                   hoverBg : 'btn.hoverBg' , 
                                   hoverTxt : 'btn.hoverTxt',
                                   height : '25px'
                                }} 
                         props = {{name : "Follow"}} />
               </Stack>
                
            </Stack>
        </Card>
    )
}
export default StoreCard;