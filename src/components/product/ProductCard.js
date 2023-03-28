
import { Stack, CardMedia, Typography, CardHeader, Card } from '@mui/material';
import LetterAvatar from '../avatar/LetterAvatar'
import useNumber from '../../hooks/useNumber';
const ProductCard = () => {
    const { fCurrency } = useNumber()
    return (
        <Card sx={{ borderRadius: '10px' ,marginBottom : '10px'}}>
            <CardMedia
                component="img"
                image="https://b.zmtcdn.com/data/pictures/chains/0/19229530/8309511541ed930ef6d882c30b5fcdc5.jpg?fit=around|300:273&crop=300:273;*,*"
                alt="Paella dish"
            />
            <Stack sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px' }}>
                <Typography variant="h5" >
                    Pizza
                </Typography>
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                    <CardHeader sx={{ padding: '0px', margin: '0px' }}
                        avatar={
                            <LetterAvatar storeName='Trendly' style={{
                                height: 27,
                                width: 27,
                                fontSize: '16px',
                                smw: 19.83,
                                smh: 20.1,
                                mdh: 27,
                                mdw: 27,
                                smf: '15px',
                                mdf: '15px'
                            }} />

                        }
                        title={
                            <Typography variant="h5" sx={{ marginLeft: '-7px', opacity: '50%' }} > Trendly</Typography>
                        }
                    />
                    <Typography variant="h5" sx={{ color: 'text.colored', fontWeight: '600' }}>
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
                        &nbsp;
                        {fCurrency(50)}
                    </Typography>
                </Stack>
            </Stack>
        </Card>
    )
}
export default ProductCard;
