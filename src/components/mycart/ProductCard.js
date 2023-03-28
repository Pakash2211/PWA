import { Typography, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import useNumber from '../../hooks/useNumber'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
const ProductCard = () => {
   const { fCurrency } = useNumber()
 
    function handleClick() {
        console.log("inc")
    }

    function handleClick1() {
        console.log("dec")
    }


    const stylesBtn = {
        "&.MuiButton-root": {
          border: "none",
          backgroundColor : '#FFFFFF',
          textTransform : 'capitalize',
          color :  '#4F4F4F',
          borderRadius : "0px",
          borderTop : "1px solid #DFE3E8"
        //   height : styles.height
        },
        "&.MuiButton-outlined": {
          color: "text.disabled",
        
        },
    //     "&.MuiButton-root:hover": {
    //         background : styles.hoverBg,
    //         color : styles.hoverTxt   
    //   }
    }





    return (
        <Card sx = {{borderRadius : '0px',boxShadow : 0 ,maxWidth : '460px',margin : 'auto',marginBottom : '20px'}}>
        <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center',padding : '25px 0px  15px 30px' }}>
            <CardMedia
                component="img"
                sx={{ width: '35%', borderRadius: '10px'}}
                image="https://b.zmtcdn.com/data/pictures/chains/0/19229530/8309511541ed930ef6d882c30b5fcdc5.jpg?fit=around|300:273&crop=300:273;*,*"
                alt="food image"
            />
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '20px' }}>
                <Typography variant="h5" >
                    Pizza
                </Typography>
                <Typography variant="h5" sx={{ color: 'text.colored', fontWeight: '600' }}>
                    {fCurrency(50)}   &nbsp;  &nbsp;

                    <Typography component="span"
                        variant="body1"
                        sx={{
                            color: 'text.disabled',
                        }}>
                        <Typography
                            component="span"
                            variant="body1"
                            sx={{
                                color: 'text.disabled',
                                textDecoration: 'line-through',
                            }}
                        >
                            {fCurrency(60)}
                        </Typography>
                        &nbsp; 50% off
                    </Typography>
                </Typography>
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography variant="h5">
                        Qty : 1
                    </Typography>
                    <Stack sx={{ marginLeft: '10px' }}>
                        <ArrowDropUpIcon onClick={handleClick1} sx={{ cursor: 'pointer' }} />
                        <ArrowDropDownIcon onClick={handleClick} sx={{ marginTop: '-5px', cursor: 'pointer' }} />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
           <Button sx = {{width : '100%',...stylesBtn}}>Remove</Button>
        </Card>
    )
}

export default ProductCard;