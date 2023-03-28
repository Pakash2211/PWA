import Card from '@mui/material/Card';
import { Typography, Stack } from '@mui/material';
import useNumber from '../../hooks/useNumber'
import Button from '@mui/material/Button';
const PricePart = () => {
    const { fCurrency } = useNumber();
    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }


    const stylesBtn = {
        "&.MuiButton-root": {
            border: "none",
            backgroundColor: '#33907C',
            //   textTransform : 'capitalize',
            color: '#FFFFFF',
            borderRadius: "24px",
            height: '48px',
            maxWidth: '311px',
            padding: '10px 80px',
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
        <Stack >
            <Card sx={{ borderRadius: '0px', boxShadow: 0, padding: '30px' }}>
                <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '10px' }}>Price Details</Typography>
                <Stack sx={{ ...style, marginBottom: '10px' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: '500' }}>Price (1 items) </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: '500' }}> {fCurrency(50)}</Typography>

                </Stack>
                <Stack sx={{ ...style, marginBottom: '15px' }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: '500' }}>Delivery Fee</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: '500' }}>{fCurrency(10)} </Typography>

                </Stack>
                <hr />
                <Stack sx={{ ...style, margin: '15px 0px' }}>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}>Total Amount</Typography>
                    <Typography variant="h6" sx={{ fontWeight: '600' }}> {fCurrency(60)}</Typography>
                </Stack>
            </Card>
            <Card sx={{ padding: '20px 30px', borderRadius: '0px', boxShadow: 0, marginTop: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'center' , marginBottom : '50px'}}>
                <Button sx={stylesBtn}>Continue to Payment</Button>
            </Card>
        </Stack>
    )
}

export default PricePart;